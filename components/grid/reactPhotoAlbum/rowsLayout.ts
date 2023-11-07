/**
 * adapted from https://react-photo-album.com/
 */


import {ReactElement} from 'react'


import findShortestPath from "./dijkstra";
import round from './round'
import ratio from './ratio'

// main object passed to layout algorithm
export interface GridItem {
    width: number
    height: number
    keepAspectRatioOnMobile: boolean
    element: ReactElement
}


// guesstimate how many neighboring nodes should be searched based on
// the aspect columnRatio of the container with images and minimal aspect columnRatio of all Items
// as the maximum amount of Items per row, plus some nodes
const findIdealNodeSearch = (gridItems: GridItem[], targetRowHeight: number, containerWidth: number) => {
    const minRatio = gridItems.reduce((acc, gridItem) => Math.min(ratio(gridItem), acc), Number.MAX_VALUE);
    return round(containerWidth / targetRowHeight / minRatio) + 2;
};


// get the height for a set of Items in a potential row
const getCommonHeight = (row: GridItem[], containerWidth: number, spacing: number) => {
    const rowWidth = containerWidth - (row.length - 1) * spacing;
    const totalAspectRatio = row.reduce((acc, gridItem) => acc + ratio(gridItem), 0);
    return rowWidth / totalAspectRatio;
};

// calculate the cost of breaking at this node (edge weight)
const cost = (
    gridItems: GridItem[],
    i: number,
    j: number,
    width: number,
    targetRowHeight: number,
    spacing: number
) => {
    const row = gridItems.slice(i, j);
    const commonHeight = getCommonHeight(row, width, spacing);
    return commonHeight > 0 ? (commonHeight - targetRowHeight) ** 2 * row.length : undefined;
};

// return function that gets the neighboring nodes of node and returns costs
const makeGetRowNeighbors = (
    gridItems: GridItem[],
    containerWidth: number,
    spacing: number,
    targetRowHeight: number,
    limitNodeSearch: number,
    minItems: number = 1,
    maxItems: number = Infinity
    //rowConstraints?: RowConstraints;
) => (node: number) => {
    const results = new Map<number, number>();
    results.set(node, 0);
    const startOffset = minItems
    const endOffset = Math.min(limitNodeSearch, maxItems);
    for (let i = node + startOffset; i < gridItems.length + 1; i += 1) {
        if (i - node > endOffset) break;
        const currentCost = cost(gridItems, node, i, containerWidth, targetRowHeight, spacing);
        if (currentCost === undefined) break;
        results.set(i, currentCost);
    }
    return results;
};

export const computeRowsLayout = (gridItems: GridItem[],
                                  containerWidth: number,
                                  targetRowHeight: number,
                                  spacing: number,
                                  minItems: number = 1,
                                  maxItems: number = Infinity)
    : Array<Array<{
    gridItem: GridItem,
    height: number,
    width: number,
    index: number,
    itemIndex: number,
    itemsCount: number
}>> => {

    const limitNodeSearch = findIdealNodeSearch(gridItems, targetRowHeight, containerWidth);

    const getNeighbors = makeGetRowNeighbors(gridItems, containerWidth, spacing, targetRowHeight, limitNodeSearch, minItems, maxItems);

    const path = findShortestPath(getNeighbors, 0, gridItems.length);

    // impossible layout
    if (path === undefined) {
        console.log('impossible layout')
        return [];
    }

    const layout = [];

    for (let i = 1; i < path.length; i += 1) {
        const row = gridItems.map((gridItem, index) => ({gridItem, index})).slice(path[i - 1], path[i]);
        const height = getCommonHeight(
            row.map(({gridItem}) => gridItem),
            containerWidth,
            spacing
        );
        layout.push(
            row.map(({gridItem, index}, itemIndex) => ({
                gridItem,
                height,
                width: height * ratio(gridItem),
                index,
                itemIndex,
                itemsCount: row.length,
            }))
        );
    }
    // console.log('layout ', layout)
    return layout;
};

export const calcWidth = (
    base: string,
    width: number,
    itemsCount: number,
    spacing: number,
    containerWidth: number) => {
    const gaps = spacing * (itemsCount - 1);
    return `calc((${base} - ${gaps}px) / ${round((containerWidth - gaps) / width, 5)})`;
};





'use client'

import styles from './grid.module.scss'

import * as React from 'react'
import {calcWidth, computeRowsLayout, GridItem} from './reactPhotoAlbum/rowsLayout'

import useWindowWidth from '../useWindowWidth'


type GridProps = {
    children: Array<React.ReactElement>,
    spacing?: number
}

const Grid: React.FunctionComponent<GridProps> = ({ children}): JSX.Element => {
    const windowWidth = useWindowWidth()

    const gridItems: Array<GridItem> = children.map((child) => {
        const width = child.props['data-width']
        const height = child.props['data-height']
        if (!width || !height) {
            throw Error('Child passed to <Grid> did not contain "data-width" and "data-height" props')
        }
        return {width: width, height: height, element: child}
    })


    if (!windowWidth) {
        // return grid elements as they are on the server side (so that images can be loaded as early as possible
        return (
            <div className={styles.container}>
                {children}
            </div>)
    } else {
        const targetRowHeight = windowWidth / 6

        const spacing = Math.round(windowWidth / 200)

        const maxItems = Math.min(4, Math.max(1, 1 + Math.ceil((windowWidth - 800) / 400)))

        const rowsLayout = computeRowsLayout(gridItems, windowWidth, targetRowHeight, spacing, 1, maxItems)

        return (

            <div className={styles.container}>
                {rowsLayout.map((row, rowIndex) => (
                    <div className={styles.row}
                         key={`row-${rowIndex}`}
                         style={{
                             ...(rowIndex < rowsLayout.length - 1 ? {marginBottom: `${spacing}px`} : null)
                         }}>
                        {row.map(({gridItem, height, width, index, itemIndex, itemsCount}) => (
                            <div key={itemIndex}
                                 className={styles.item}
                                 style={
                                     {
                                         width: calcWidth("100%", width, itemIndex, spacing, windowWidth),
                                         height: `${height}px`,
                                         aspectRatio: `${gridItem.width} / ${gridItem.height}`,
                                         // ...(onClick ? { cursor: "pointer" } : null),
                                     }}>
                                {gridItem.element}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default Grid




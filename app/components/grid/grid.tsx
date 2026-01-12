'use client'

import styles from './grid.module.scss'

import React, { ReactElement, FunctionComponent, ReactNode } from 'react'
import { calcWidth, computeRowsLayout, GridItem } from './reactPhotoAlbum/rowsLayout'

import useWindowWidth from '../../lib/useWindowWidth'


type GridProps = {
    children: ReactNode,
    spacing?: number
}

const Grid: FunctionComponent<GridProps> = ({ children }): React.JSX.Element => {
    const windowWidth = useWindowWidth()

    if (children == undefined) {
        console.warn('Warning: no children passed to <Grid>')
        return <></>
    }

    const childElements = React.Children.toArray(children).filter((child): child is ReactElement<any> => React.isValidElement(child))

    if (childElements.length === 0) {
        console.warn('Warning: no valid React elements passed to <Grid>')
        return <></>
    }

    const gridItems: Array<GridItem> = childElements.map((child) => {
        const width = child.props['data-width']
        const height = child.props['data-height']
        const keepAspectRatioOnMobile = child.props['data-keep-aspect-ratio-on-mobile']

        if (!width || !height || keepAspectRatioOnMobile===null) {
            throw Error('Child passed to <Grid> did not contain "data-width", "data-height" and "data-keep-aspect-ratio-on-mobile" props')
        }
        return { 
            width: width, 
            height: height, 
            keepAspectRatioOnMobile: keepAspectRatioOnMobile, 
            element: child 
        }
    })


    if (!windowWidth) {
        // return grid elements as they are on the server side (so that images can be loaded as early as possible
        return (
            <div className={styles.container}>
                {childElements}
            </div>)
    } else {
        const targetRowHeight = windowWidth / 6.0

        const spacing = windowWidth / 100.0

        const maxItems = Math.min(3, Math.max(1, 1 + Math.ceil((windowWidth - 700) / 400)))

        const rowsLayout = computeRowsLayout(gridItems, windowWidth, targetRowHeight, spacing, 1, maxItems)

        return (

            <div className={styles.container}>
                {rowsLayout.map((row, rowIndex) => (
                    <div className={styles.row}
                        key={`row-${rowIndex}`}
                        style={{
                            ...(rowIndex < rowsLayout.length - 1 ? { marginBottom: `${spacing}px` } : null)
                        }}
                        >
                        {row.map(({ gridItem, height, width, index, itemIndex, itemsCount }) => (
                            <div key={itemIndex}
                                className={styles.item}
                                style={{
                                    ...(row.length > 1 || gridItem.keepAspectRatioOnMobile? {

                                        width: calcWidth("100%", width, itemIndex, spacing, windowWidth),
                                        //height: `${height - spacing*2}px`,
                                        aspectRatio: `${gridItem.width} / ${gridItem.height}`,
                                        // ...(onClick ? { cursor: "pointer" } : null),
                                    } : null)
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




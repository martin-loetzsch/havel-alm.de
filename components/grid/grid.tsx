'use client'

import styles from './grid.module.scss'

import { ReactElement, FunctionComponent } from 'react'
import { calcWidth, computeRowsLayout, GridItem } from './reactPhotoAlbum/rowsLayout'

import useWindowWidth from '../useWindowWidth'


type GridProps = {
    children: Array<ReactElement>,
    spacing?: number
}

const Grid: FunctionComponent<GridProps> = ({ children }): JSX.Element => {
    const windowWidth = useWindowWidth()

    const gridItems: Array<GridItem> = children.map((child) => {
        const width = child.props['data-width']
        const height = child.props['data-height']
        const isTextCard = child.props['data-is-text-card']

        if (!width || !height || isTextCard==null) {
            throw Error('Child passed to <Grid> did not contain "data-width", "data-height" and "data-is-text-card" props')
        }
        return { width: width, height: height, isTextCard: isTextCard, element: child }
    })


    if (!windowWidth) {
        // return grid elements as they are on the server side (so that images can be loaded as early as possible
        return (
            <div className={styles.container}>
                {children}
            </div>)
    } else {
        const targetRowHeight = windowWidth / 6.0

        const spacing = windowWidth / 100.0

        const maxItems = Math.min(3, Math.max(1, 1 + Math.ceil((windowWidth - 800) / 400)))

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
                                    ...(row.length > 1 || !gridItem.isTextCard? {

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




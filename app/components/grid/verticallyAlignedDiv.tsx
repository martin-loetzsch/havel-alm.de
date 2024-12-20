/**
 * Vertically center a div based on view width
 */

'use client'


import { FunctionComponent, ReactElement } from 'react'

import useWindowWidth from '../../lib/useWindowWidth'
import styles from './verticallyAlignedDiv.module.scss'

type VerticallyAlignedDivProps = {
    children: ReactElement | ReactElement[],
    percentageOfViewWidth: number
}

const VerticallyAlignedDiv: FunctionComponent<VerticallyAlignedDivProps> = ({ percentageOfViewWidth, children }): JSX.Element => {
    const windowWidth = useWindowWidth()

    if (!windowWidth) {
        // return grid elements as they are on the server side (so that images can be loaded as early as possible
        return (
            <div className={styles.hidden} style={{'top': percentageOfViewWidth + 'vw' }}>
                {children}
            </div>)
    } else {
        return (
            <div className={styles.shown} style={{ 'top': windowWidth * percentageOfViewWidth / 100.0 + 'px' }}>
                {children}
            </div>)

    }
}

export default VerticallyAlignedDiv




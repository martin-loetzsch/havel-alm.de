import styles from './card.module.scss'

import * as React from 'react'

type CardProps = {
    width: number,
    height: number,
    children: React.ReactNode
}

const Card: React.FunctionComponent<CardProps> = ({
                                                      width,
                                                      height,
                                                      children
                                                  }): JSX.Element => {
    return (
        <div data-width={width} data-height={height} className={styles.container}>
            {children}
        </div>
    )
}

export default Card



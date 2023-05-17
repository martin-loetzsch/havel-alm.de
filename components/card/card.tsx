import styles from './card.module.scss'

import { FunctionComponent, ReactNode } from 'react'

type CardProps = {
    width: number,
    height: number,
    children: ReactNode
}

const Card: FunctionComponent<CardProps> = ({
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



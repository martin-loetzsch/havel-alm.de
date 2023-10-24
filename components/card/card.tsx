import styles from './card.module.scss'

import { FunctionComponent, ReactNode } from 'react'

type CardProps = {
    width: number,
    height: number,
    backgroundCyan?: boolean,
    children: ReactNode
}

const Card: FunctionComponent<CardProps> = ({
    width,
    height,
    backgroundCyan=false,
    children
}): JSX.Element => {
    return (
        <div data-width={width} 
            data-height={height} 
            data-is-text-card={true}
            style={{height:'100%'}}
            className={`${styles.container} ${backgroundCyan?'background-cyan':''}`}
            >
            {children}
        </div>
    )
}

export default Card



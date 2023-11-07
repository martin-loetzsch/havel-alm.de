import styles from './card.module.scss'

import { FunctionComponent, ReactNode } from 'react'

type CardProps = {
    width: number,
    height: number,
    keepAspectRatioOnMobile?: boolean,
    backgroundCyan?: boolean,
    children: ReactNode
}

const Card: FunctionComponent<CardProps> = ({
    width,
    height,
    keepAspectRatioOnMobile=false,
    backgroundCyan=false,
    children
}): JSX.Element => {
    return (
        <div data-width={width} 
            data-height={height} 
            data-keep-aspect-ratio-on-mobile={keepAspectRatioOnMobile}
            style={{height:'100%'}}
            className={`${styles.container} ${backgroundCyan?'background-cyan':''}`}
            >
            {children}
        </div>
    )
}

export default Card



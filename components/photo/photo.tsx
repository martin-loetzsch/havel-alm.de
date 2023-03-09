import styles from './photo.module.scss'

import Image from "next/image"
import * as React from 'react'
import {PhotoProps} from '../photos'

export type PhotoComponentProps = {
    props: PhotoProps,
    children?: any,
    scale?: number,
    quality?: number,
    priority?: boolean,
    className?: string
}

export const Photo: React.FunctionComponent<PhotoComponentProps> = (
    {
        props,
        children,
        scale = 35,
        quality = 75,
        priority = false,
        className
    }): JSX.Element => {
    return (
        <div data-width={props.width} data-height={props.height} className={styles.container}>
            <Image
                className={styles.image}
                src={props.src}
                alt={'Havel Alm Kratzeburg | ' + props.title}
                width={props.width}
                height={props.height}
                sizes={scale + "vw"}
                priority={priority}
                quality={quality}
                placeholder={'blur'}
                blurDataURL={props.blurDataUrl}
            />
            <div className={styles.children + ' ' + className}>
                {children}
            </div>
        </div>
    )
}

export default Photo



import styles from './photo.module.scss'

import Image from "next/image"
import * as React from 'react'
import {PhotoProps} from '../photos'

export type PictureProps = {
    props: PhotoProps,
    children?: any,
    width?: number,
    priority?: boolean,
    className?: string
}

export const Photo: React.FunctionComponent<PictureProps> = ({
                                                                   props,
                                                                   children,
                                                                   width = 35,
                                                                   priority = false,
                                                                   className
                                                               }): JSX.Element => {
    return (
        <div data-width={props.width} data-height={props.height} className={styles.container}>
            <Image
                className={styles.image}
                src={props.src}
                alt={props.title}
                width={props.width}
                height={props.height}
                sizes={width + "vw"}
                priority={priority}
                quality={75}
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



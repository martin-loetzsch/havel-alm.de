import styles from './picture.module.scss'

import Image from "next/image"
import * as React from 'react'
import Photo from '../photos'

export type PictureProps = {
    photo: Photo,
    children?: any,
    width?: number,
    priority?: boolean,
    className?: string
}

export const Picture: React.FunctionComponent<PictureProps> = ({
                                                                   photo,
                                                                   children,
                                                                   width = 60,
                                                                   priority = false,
                                                                   className
                                                               }): JSX.Element => {
    return (
        <div data-width={photo.width} data-height={photo.height} className={styles.container}>
            <Image
                className={styles.image}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes={width + "vw"}
                priority={priority}
                quality={100}
                placeholder={'blur'}
                blurDataURL={photo.blurDataUrl}
            />
            <div className={styles.children + ' ' + className}>
                {children}
            </div>
        </div>
    )
}

export default Picture



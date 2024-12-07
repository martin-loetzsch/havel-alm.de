import styles from './photo.module.scss'

import Image from "next/image"
import {FunctionComponent} from 'react'
import {PhotoProps} from './processedPhotos'
import Link from "next/link";

export type PhotoComponentProps = {
    props: PhotoProps,
    children?: any,
    scale?: number,
    quality?: number,
    priority?: boolean,
    className?: string,
    blackFont?: boolean,
    linkToPhotoPage?: boolean,
    printSrcPathDuringBuild?: boolean
}

export const Photo: FunctionComponent<PhotoComponentProps> = (
    {
        props,
        children,
        scale = 35,
        quality = 75,
        priority = false,
        className = '',
        blackFont = false,
        linkToPhotoPage = true,
        printSrcPathDuringBuild = true
    }): JSX.Element => {

    let image = <Image
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

    if (linkToPhotoPage) {
        image = <Link href={`/photos/${props.slug}`} prefetch={false} className={styles.imageLink}>
            {image}
        </Link>
    }

    // print the path of the image during build to help detecting unused images
    if (printSrcPathDuringBuild && process.env.PRINT_IMAGE_PATHS) {
        process.stderr.write(props.src.slice(1) + '\n')
    }

    return (
        <div
            data-width={props.width}
            data-height={props.height}
            data-keep-aspect-ratio-on-mobile={true}
            className={styles.container}
        >
            {image}
            <div className={styles.children + ' ' + className}>
                {children ? children : <small className={blackFont ? '' : 'color-cyan'}>{props.title}</small>}
            </div>
        </div>
    )
}

export default Photo



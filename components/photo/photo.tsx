import styles from './photo.module.scss'

import Image from "next/image"
import { FunctionComponent } from 'react'
import { PhotoProps } from '../photos'
import Link from "next/link";

export type PhotoComponentProps = {
    props: PhotoProps,
    children?: any,
    scale?: number,
    quality?: number,
    priority?: boolean,
    className?: string,
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
    if (printSrcPathDuringBuild) {
        process.stderr.write(props.src.slice(1) + '\n')
    }

    return (
        <div data-width={props.width} data-height={props.height} data-is-text-card={false} className={styles.container}>
            {image}
            <div className={styles.children + ' ' + className}>
                {children}
            </div>
        </div>
    )
}

export default Photo



import styles from './picture.module.scss'

import Image, {StaticImageData} from "next/image"
import * as React from 'react'
import Photo from '../photos'

type Props = {
    photo: Photo,
    children?: any,
    width?: number,
    priority?: boolean,
    className?: string
}

const Picture: React.FC<Props> = ({photo, children, width = 100, priority = false, className}) => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.image}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes={width + "vw"}
                priority={priority}
            />
            <div className={styles.children + ' ' + className} >
                {children}
            </div>
        </div>
    )
}

export default Picture



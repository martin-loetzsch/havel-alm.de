import styles from './picture.module.scss'

import Image, {StaticImageData} from "next/image"
import * as React from 'react'


type Props = {
    image: StaticImageData,
    alt: string,
    children: any,
    width?: number,
    priority?: boolean
}

const Picture: React.FC<Props> = ({image, alt, children, width = 100, priority = false}) => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.image}
                src={image}
                alt={alt}
                sizes={width + "vw"}
                priority={priority}
            />
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}

export default Picture



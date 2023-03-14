import photos, {photosBySlug} from "@/components/photos";
import Photo from "@/components/photo/photo";
import Link from "next/link";
import styles from './page.module.scss'
import KeyboardNavigation from "./keyboardNavigation";
import type {Route} from 'next';

type PageParams = {
    slug: string
};

type PageProps = {
    params: PageParams;
};

export async function generateStaticParams(): Promise<PageParams[]> {
    return (Object.entries(photos).map((entry: any) => {
        return ({slug: entry[1].slug})
    }))
}


export default function Page({params}: PageProps) {
    const photo = photosBySlug[decodeURI(params.slug)]

    const nextPhotoLink = photo.slugNextPhoto && `/photos/${photo.slugNextPhoto}`
    const previousPhotoLink = photo.slugPreviousPhoto && `/photos/${photo.slugPreviousPhoto}`
    //console.log(params, photo)

    return (
        <>
            <h1><Link href="/">Havel Alm</Link></h1>
            <div className={styles.flexContainer}>
                <h3>{photo.title}</h3>
                <h3>
                    {previousPhotoLink &&
                        <Link href={previousPhotoLink as Route}
                              scroll={false}>
                            ⬅
                        </Link>}

                    {nextPhotoLink &&
                        <>
                            &#160;&#160;&#160;
                            <Link scroll={false} href={nextPhotoLink as Route}>⮕</Link>
                        </>
                    }
                </h3>
            </div>
            <Photo props={photo} scale={150} quality={100} priority={true}/>
            <p className={styles.flexContainer}>
                {new Intl.DateTimeFormat("de").format(photo.createdAt)}
                <Link href={photo.src as Route} prefetch={false}>Original ({photo.width} x {photo.height} px)</Link>
            </p>
            <KeyboardNavigation
                linkOnLeftArrow={previousPhotoLink}
                linkOnRightArrow={nextPhotoLink}/>
        </>)
}
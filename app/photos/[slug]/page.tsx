import photos, {photosBySlug} from "@/components/photos";
import Photo from "@/components/photo/photo";
import Link from "next/link";
import styles from './page.module.scss'

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

    return (
        <>
            <h1>Havel Alm</h1>
            <div className={styles.flexContainer}>
                <h3>{photo.title}</h3>
                <h3>
                    {photo.slugPreviousPhoto &&
                        <Link href={'/photos/' + photo.slugPreviousPhoto}
                              scroll={false}>
                            ⬅
                        </Link>}

                    {photo.slugNextPhoto &&
                        <>
                            &#160;&#160;&#160;
                            <Link className={styles.right} href={'/photos/' + photo.slugNextPhoto}>⮕</Link>
                        </>
                    }
                </h3>
            </div>
            <Photo props={photo} scale={150} quality={100} priority={true}/>
            <p className={styles.flexContainer}>
                {new Intl.DateTimeFormat("de").format(photo.createdAt)}
                <Link href={photo.src} prefetch={false}>Original ({photo.width} x {photo.height} px)</Link>
            </p>
        </>)
}
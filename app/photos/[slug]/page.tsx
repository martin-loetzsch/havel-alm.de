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
            <h3>{photo.title}</h3>
            <Photo props={photo} scale={150} quality={100}/>
            <p className={styles.metadataContainer}>
                {new Intl.DateTimeFormat("de").format(photo.createdAt)}
                <Link  href={photo.src}>Originalgrösse ({photo.width} x {photo.height} px)</Link>
            </p>
        </>)
}
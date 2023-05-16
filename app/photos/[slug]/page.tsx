import Photo from "@/components/photo/photo";
import photos, { photosBySlug } from "@/components/photos";
import type { Metadata, Route } from 'next';
import Link from "next/link";
import { notFound } from "next/navigation";
import KeyboardNavigation from "./keyboardNavigation";
import styles from './page.module.scss';

type PageParams = {
    slug: string
};

type PageProps = {
    params: PageParams;
};

export async function generateStaticParams(): Promise<PageParams[]> {
    return (Object.entries(photos).map((entry: any) => {
        return ({ slug: entry[1].slug })
    }))
}

// Dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const photo = photosBySlug[decodeURI(params.slug)]
    if (!photo) {
        return {}
    }
    const title = photo.title + ' | Havel Alm Kratzeburg'
    const description = `Foto ${photo.width} x ${photo.height} Pixel, aufgenommen am `
        + new Intl.DateTimeFormat("de").format(photo.createdAt)
        + ' , lizenziert unter CC BY 4.0'

    return {
        title: title,
        description: description,
        authors: [{ name: 'Havel Alm', url: 'https://havel-alm.de' }],
        openGraph: {
            title: title,
            description: description,
            url: 'https://havel-alm.de/photos/' + photo.slug,
            siteName: 'havel-alm.de',
            images: [
                {
                    url: 'https://havel-alm.de/' + photo.src,
                    width: photo.width,
                    height: photo.height,
                    alt: title,
                },
            ],
            publishedTime: photo.createdAt.toISOString(),
            locale: 'de-DE',
        },
        icons: {
            icon: '/favicon.ico',
        }
    };
}


export default function Page({ params }: PageProps) {
    const photo = photosBySlug[decodeURI(params.slug)]

    if (!photo) {
        notFound()
    }

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
            <Photo props={photo} scale={150} quality={100} priority={true} linkToPhotoPage={false} />
            <p className={styles.flexContainer}>
                {new Intl.DateTimeFormat("de").format(photo.createdAt)}
                <Link href={photo.src as Route} prefetch={false}
                    target="_blank" rel="nofollow">
                    Original ({photo.width} x {photo.height} px)
                </Link>

            </p>
            <p>
                Lizenziert unter {' '}
                <a rel="license" href="https://creativecommons.org/licenses/by/4.0/deed.de">
                    CC BY 4.0
                </a>
                {' '}(<a {...{ 'xmlns:cc': "http://creativecommons.org/ns#" }}
                    href="https://havel-alm.de" property="cc:attributionName"
                    rel="cc:attributionURL">havel-alm.de</a>)
            </p>
            <KeyboardNavigation
                linkOnLeftArrow={previousPhotoLink}
                linkOnRightArrow={nextPhotoLink} />
        </>)
}
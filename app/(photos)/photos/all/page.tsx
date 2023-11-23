import Grid from "@/app/components/grid/grid";
import Photo from '@/app/(photos)/photo';
import photosBySlug from '@/app/(photos)/photos';
import getMetaData from '@/app/lib/getMetaData';
import type { Metadata } from 'next';
import Nav from '../../../components/nav/nav';

const title = "Havel Alm Fotos"
const description = "Allo Fotos auf der Havel Alm Webseite, sortiert nach Datum"

export const metadata: Metadata = getMetaData(title, description)

export default function Page() {
    return (
        <>
            <h1 className='background-cyan'>Alle Fotos</h1>
            <Grid>
                {Object.keys(photosBySlug).map((key, index) => {
                    const props = photosBySlug[key as keyof typeof photosBySlug]

                    return (
                        <Photo props={props} key={index} priority={false} printSrcPathDuringBuild={false}>
                            <p className='color-cyan'>{props.title}</p>
                        </Photo>
                    )
                })}
            </Grid>
            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
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
                {Object.keys(photos).map((key, index) => (
                    <Photo props={photos[key]} key={index} >
                        <p className='color-cyan'>{photos[key].title}</p>
                    </Photo>
                ))}
            </Grid>
            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


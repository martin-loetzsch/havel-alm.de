import { default as Card, default as TextCard } from '@/components/card/textCard';
import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import grundrissDG from '@/public/grundrisse/Grundriss DG.svg';
import grundrissEG from '@/public/grundrisse/Grundriss EG.svg';
import type { Metadata } from 'next';
import Image from "next/image";
import Nav from '../../components/nav/nav';

const title = "Preise und Buchung"
const description = "Verfügbarkeiten, Buchungsoptionen & Konditionen"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>
            
            <Photo props={photos.Haus__Gastraum__Sofa_1} priority={true}>
                <h1 className='color-cyan'>Preise und Buchung</h1>
            </Photo>
            <Grid>
                <TextCard width={3000} height={1000} backgroundCyan={true}>
                    <p></p>
                </TextCard>
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_4} />
            </Grid>
            <Grid>
                <TextCard width={3000} height={1000} backgroundCyan={true}>
                <h3>Stornierungsbedingungen</h3>
                </TextCard>
            </Grid>
            <Nav verticalOffsetInVWs={58}/>
        </>
    )
}


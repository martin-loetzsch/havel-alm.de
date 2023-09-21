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
import { FunctionComponent, ReactNode } from 'react'

const title = "Preise und Buchung"
const description = "Verfügbarkeiten, Buchungsoptionen & Konditionen"

export const metadata: Metadata = getMetaData(title, description)


const prices: { [key: string]: number[] } = {
    'Neben&shy;saison': [450, 390, 330, 290, 260],
    'Haupt&shy;saison': [600, 520, 450, 390, 340],
    'Feier&shy;tage': [850, 850, 790, 680, 590, 520]
}



export default function Home() {
    let heightPricingTable = 620
    return (
        <>

            <Photo props={photos.Die_Umgebung__Badestelle_am_Käbelicksee_2} priority={true}>
                <h1 className='color-cyan'>Preise und Buchung</h1>
            </Photo>
            <Grid>
                <TextCard width={1000} height={heightPricingTable} backgroundCyan={true}>
                    <p style={{ marginBottom: '2vw' }}>Preise pro Nacht</p>
                    <table style={{ textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th style={{ fontWeight: 'bold' }}>Nächte</th>
                                {
                                    Object.keys(prices).map((season, index) => (
                                        <th key={index} style={{ fontWeight: 'bold' }}>
                                            <span dangerouslySetInnerHTML={{ __html: season + '&sup' + (index + 1) + ';' }} />
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ['2', '3', '4', '5', '6+'].map((nights, indexNights) => (
                                    <tr key={indexNights} >
                                        <td>{nights}</td>
                                        {
                                            Object.keys(prices).map((season, indexPrice) => (
                                                <td key={indexPrice}> {prices[season][indexNights]}€</td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </TextCard>
                <TextCard width={350} height={heightPricingTable} backgroundCyan={false}>
                    {/* <p style={{ marginBottom: '2vw' }}>Zeiträume</p> */}
                    <p>&sup1;September bis Juni</p>
                    <p>&sup2;Juli & August + Brückentage</p>
                    <p>&sup3;Ostern, Himmel&shy;fahrt, Pfingsten, Weihnachten, Neu&shy;jahr</p>
                </TextCard>
            </Grid>
            <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_4} />

            <Nav verticalOffsetInVWs={58} />
        </>
    )
}


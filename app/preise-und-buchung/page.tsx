import { default as TextCard } from '@/components/card/textCard';
import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import type { Metadata } from 'next';
import Nav from '../../components/nav/nav';

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

            <Photo props={photos.Die_Umgebung__Badestelle_am_Kaebelicksee_2} linkToPhotoPage={false} priority={true} quality={100}>
                <h1 className='color-cyan'>Preise und Buchung</h1>
            </Photo>
            <p>Ihr könnt die Havel Alm über <a href="https://www.fewo-direkt.de/ferienwohnung-ferienhaus/p5361182">FeWo-Direkt</a> buchen (dort seht ihr auch unsere Verfügbarkeiten).</p>
            <p>Oder ihr schreibt uns eine Email an <a href="mailto:info@havel-alm.de">info@havel-alm.de</a>, dann gelten diese Preise:</p>
            <Grid>
                <TextCard width={1000} height={heightPricingTable} backgroundCyan={true}>
                    <p style={{ marginBottom: '2vw' }}>Preis pro Nacht</p>
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
                    <p>&sup1;September bis Juni</p>
                    <p>&sup2;Juli & August + Brückentage</p>
                    <p>&sup3;Ostern, Himmel&shy;fahrt, Pfingsten, Weihnachten, Neu&shy;jahr</p>
                </TextCard>
            </Grid>
            <p>Zum Übernachtungspreis kommt eine <strong>Endreinigungs&shy;ge&shy;bühr</strong> von 250€ hinzu (ja das ist hoch, deckt aber nicht die Kosten).</p>
            <p>Enthalten sind Betwäsche, Handtücher, Kafee, Strom (auch für Waschmaschine & Trockner) sowie alle sonstigen Nebenkosten.</p>
            <p>E-Autos können nach Abspache aufgeladen werden.</p>
            <div className='background-cyan'>
                <p>Wenn ihr direkt über uns bucht, könnt ihr bis zwei Monate vor Anreise eure Buchung <strong>kostenlos stornieren</strong>.</p>
                <p>Bei Buchung überweist ihr 50% des Preises, der zweite Teil ist 2 Monate vor Anreise fällig (den wir dann leider nicht mehr erstatten können).</p>
                <p>Bei der Buchung über Portale gelten die dort hinterlegten Stornierungsbedingungen.</p>
            </div>
            <Photo props={photos.Die_Umgebung__Der_zugefrorene_Kaebelicksee} />

            <Nav verticalOffsetInVWs={58} />
        </>
    )
}

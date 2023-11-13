import Card from '@/components/card/card';
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
    'Haupt&shy;saison': [650, 590, 520, 460, 410],
    'Feier&shy;tage': [850, 790, 680, 590, 520]
}



export default function Home() {
    let heightPricingTable = 620
    return (
        <>

            <Photo props={photos.Kratzeburg__Badestelle_am_Kaebelicksee_2} linkToPhotoPage={false} priority={true} quality={100}>
                <h1 className='color-cyan'>Preise und Buchung</h1>
            </Photo>
            <p>Ihr könnt die Havel Alm über <a href="https://www.fewo-direkt.de/ferienwohnung-ferienhaus/p5361182">FeWo-Direkt</a> oder <a href="https://www.airbnb.de/rooms/907993973485938482">AirBnB</a> buchen (dort seht ihr auch unsere Verfügbarkeiten).</p>
            <p>Oder ihr schreibt uns eine Email an <a href="mailto:info@havel-alm.de">info@havel-alm.de</a>, dann gelten diese Preise:</p>
            <Grid>
                <Card width={1000} height={heightPricingTable} backgroundCyan={true}>
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
                </Card>
                <Card width={350} height={heightPricingTable} backgroundCyan={false}>
                    <small>&sup1;September bis Juni</small>
                    <small>&sup2;Juli & August + Brückentage</small>
                    <small>&sup3;Ostern, Himmel&shy;fahrt, Pfingsten, Weihnachten, Neu&shy;jahr</small>
                </Card>
            </Grid>
            <p>Zum Übernachtungspreis kommt eine <strong>Endreinigungs&shy;ge&shy;bühr</strong> von 250€ hinzu.</p>
            <p>Enthalten sind Bettwäsche, Handtü&shy;cher, Kaffee, Strom (auch für Wasch&shy;maschine & Trockner) sowie alle sonstigen Nebenkosten.</p>
            <p>E-Autos können nach Abspache auf&shy;geladen werden.</p>
            <div className='background-cyan'>
                <p>Wenn ihr direkt über uns bucht, könnt ihr bis zwei Monate vor Anreise eure Buchung <strong>kostenlos stornieren</strong>.</p>
                <p>Bei Buchung überweist ihr 50% des Preises, der zweite Teil ist 2 Monate vor Anreise fällig (den wir dann leider nicht mehr erstatten können).</p>
                <p>Bei der Buchung über Portale gelten die dort hinterlegten Stornierungs&shy;bedingungen.</p>
            </div>
            <Photo props={photos.Kratzeburg__Der_zugefrorene_Kaebelicksee} ><></></Photo>

            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


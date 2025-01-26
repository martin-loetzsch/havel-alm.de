import Card from '@/app/components/grid/card';
import Grid from "@/app/components/grid/grid";
import Nav from '@/app/components/nav/nav';
import Photo from '@/app/(photos)/photo';
import photos from '@/app/(photos)/processedPhotos';
import getMetaData from '@/app/lib/getMetaData';
import type {Metadata} from 'next';

const title = "Preise und Buchung"
const description = "Verfügbarkeiten, Buchungsoptionen & Konditionen"

export const metadata: Metadata = getMetaData(title, description)


const prices: { [key: string]: number[] } = {
    'Neben&shy;saison': [500, 450, 400, 350, 300],
    'Haupt&shy;saison': [750, 675, 600, 525, 450],
    'Feier&shy;tage': [1000, 900, 800, 700, 600]
}


export default function Home() {
    let heightPricingTable = 620
    return (
        <>

            <Photo props={photos.Kratzeburg__Badestelle_am_Kaebelicksee_2} linkToPhotoPage={false} priority={true}
                   quality={100}>
                <h1 className='color-cyan'>Preise und Buchung</h1>
            </Photo>
            <p className='background-cyan'>Wir vermieten unser Haus an Gruppen von bis zu 12 Personen plus 5 Kinder. Die
                Mindestmietdauer ist 2 Nächte, in der Hauptsaison und an Feiertagen 4 Nächte. Haustiere sind nicht
                erlaubt.</p>
            <p>Ihr könnt die Havel Alm über <a
                href="https://www.fewo-direkt.de/ferienwohnung-ferienhaus/p5361182">FeWo-Direkt</a> oder <a
                href="https://www.airbnb.de/rooms/907993973485938482">AirBnB</a> buchen (dort seht ihr auch unsere
                Verfügbarkeiten).</p>
            <p>Oder ihr schreibt uns eine Email an <a href="mailto:info@havel-alm.de">info@havel-alm.de</a>, dann gelten
                diese Preise:</p>
            <Grid>
                <Card width={1000} height={heightPricingTable} backgroundCyan={true}>
                    <p style={{marginBottom: '2vw'}}>Preis pro Nacht</p>
                    <table style={{textAlign: 'left'}}>
                        <thead>
                        <tr>
                            <th style={{fontWeight: 'bold'}}>Nächte</th>
                            {
                                Object.keys(prices).map((season, index) => (
                                    <th key={index} style={{fontWeight: 'bold'}}>
                                        <span dangerouslySetInnerHTML={{__html: season + '&sup' + (index + 1) + ';'}}/>
                                    </th>
                                ))
                            }
                        </tr>
                        </thead>
                        <tbody>
                        {
                            ['2', '3', '4', '5', '6+'].map((nights, indexNights) => (
                                <tr key={indexNights}>
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
                    <small>&sup1;September bis Mai</small>
                    <small>&sup2;Juni bis August</small>
                    <small>&sup3;Ostern, Himmel&shy;fahrt, Pfingsten, Weihnachten, Neu&shy;jahr</small>
                </Card>
            </Grid>
            <p>Zum Übernachtungspreis kommt eine <strong>Endreinigungs&shy;ge&shy;bühr</strong> von 300€ hinzu.</p>
            <p>Enthalten sind Bettwäsche, Handtü&shy;cher, Kaffee, Strom sowie alle sonstigen Nebenkosten.</p>
            <p>E-Autos können nach Abspache auf&shy;geladen werden.</p>
            <div className='background-cyan'>
                <p>Wenn ihr direkt über uns bucht, könnt ihr bis zwei Monate vor Anreise eure Buchung <strong>kostenlos
                    stornieren</strong>.</p>
                <p>Bei Buchung überweist ihr 50% des Preises, der zweite Teil ist 2 Monate vor Anreise fällig (den wir
                    dann leider nicht mehr erstatten können).</p>
                <p>Bei der Buchung über Portale gelten die dort hinterlegten Stornierungs&shy;bedingungen.</p>
            </div>
            <p>Wenn ihr uns eine Anfrage schickt. schreibt bitte ein paar Sätze zu eurer Gruppe. Wir möchten wir wissen,
                wem wir unser Haus anvertrauen.</p>
            <Photo props={photos.Kratzeburg__Der_zugefrorene_Kaebelicksee}><></>
            </Photo>

            <Nav verticalOffsetInVWs={20}/>
        </>
    )
}


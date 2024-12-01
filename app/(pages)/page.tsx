import Card from '@/app/components/grid/card';
import Grid from "@/app/components/grid/grid";
import Nav from '@/app/components/nav/nav';
import Photo from '@/app/(photos)/photo';
import photos from '@/app/(photos)/processedPhotos';
import getMetaData from '@/app/lib/getMetaData';
import VerticallyAlignedDiv from '@/app/components/grid/verticallyAlignedDiv';
import type {Metadata} from 'next';
import Link from 'next/link';

const title = "Havel Alm Kratzeburg"
const description = "68 Meter über Normalhöhennull, an der Quelle der Havel, 80 Minuten von Berlin per Regionalexpress"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>

            <Photo props={photos.Ansichten__Das_Haus_von_oben_1} priority={true} scale={75}
                   className='color-cyan' linkToPhotoPage={false}>
                <h1 style={{top: '9vw'}}>Havel Alm</h1>
                <div style={{top: '47vw'}}>
                    <blockquote>68 Meter über Normalhöhennull</blockquote>
                    <blockquote>An der Quelle der Havel</blockquote>
                    <blockquote>80 min von Berlin per Regionalexpress</blockquote>
                </div>
                <VerticallyAlignedDiv percentageOfViewWidth={150}>
                    <blockquote>Das Ferienhaus für</blockquote>
                    <blockquote> - Urlaube in grösseren Gruppen</blockquote>
                    <blockquote> - Familientreffen</blockquote>
                    <blockquote> - Workshops und Team Offsites</blockquote>
                </VerticallyAlignedDiv>
            </Photo>


            <Grid>
                <Card width={1420} height={1000}>
                    <p>Die Havel Alm ist eine zum Ferien&shy;haus um&shy;ge&shy;baute ehe&shy;malige Sche&shy;une in Kratzeburg, einem
                        idyllischen Dorf inmitten vom Müritz-Nationalpark.</p>
                </Card>
                <Photo props={photos.Ansichten__Das_Haus_vom_Garten_aus}/>

                <Photo props={photos.Ansichten__Blick_von_Osten}/>
                <Photo props={photos.Ansichten__Havel_Alm_Schild}>{" "}</Photo>
                <Photo props={photos.Ansichten__Blick_von_der_Strasse}/>
            </Grid>

            <Grid>
                <Photo props={photos.Haus__Gastraum__Gastraum_1}/>
                <Card width={1800} height={1000} backgroundCyan={true}>
                    <p>Das Haus hat 3 Bäder, ein&shy;en grossen Gast&shy;raum und eine umfang&shy;reich ausge&shy;stattete
                        Küche. Es gibt 6 Doppel­zim­mer, davon 5 mit zusätz­lich­em Hochbett. Es können also bis zu <strong>12 Personen plus 5 Kinder</strong> übernachten.</p>
                </Card>
            </Grid>
            <Grid>
                <Photo props={photos.Haus__Gastraum__Gastraum_2}/>
            </Grid>
            <Grid>
                <Card width={1000} height={1000}>
                    <p style={{background: 'white'}}>Bei der ökologischen Sanierung des Hauses haben wir uns auf sehr
                        wenige Formen und Materialien (Eschen&shy;holz, Lehm und Asphalt) beschränkt.</p>
                    <p>Die Architektur wirkt dadurch sehr minimal, grosszügig und ruhig.</p>
                </Card>
                <Photo props={photos.Haus__Flur_DG__Flur_DG_1}/>
                <Photo props={photos.Haus__Gastraum__Sofa_1}/>
                <Card width={400} height={1000} backgroundCyan={true}>
                    <p>Hier findet ihr <Link href='/das-haus' prefetch={false}>alle Infos zu den Räu&shy;men und der
                        Ausstat&shy;tung des Hauses</Link>.</p>
                </Card>
            </Grid>
            <Grid>
                <Card width={750} height={1000} backgroundCyan={true}>
                    <p style={{background: 'white'}}>Durch den fast exklusiven Einsatz von ökologischen Bau&shy;stoffen
                        und Textilien ist das Haus sehr gut für Allergiker geeignet.</p>
                    <p>Deswegen sind Haustiere bei uns leider nicht erlaubt.</p>

                </Card>
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_2}/>

            </Grid>
            <Grid>
                <Card width={1000} height={1000}>
                    <p>Eure Kinder hin&shy;ge&shy;gen sind sehr will&shy;kom&shy;men (wir ha&shy;ben selbst drei). Sie
                        wer&shy;den sich bei uns wohlfühlen.</p>
                </Card>
                <Photo props={photos.Garten__Bobby_Cars}/>
            </Grid>
            <Grid>
                <Card width={2000} height={1000} backgroundCyan={true}>
                    <p style={{backgroundColor: 'white'}}>Die Havel Alm hat einen ca. 1000m² grossen Garten. Von der ca.
                        100m² grossen Terrasse habt ihr einen wundervollen Blick auf einen Sumpf/ eine Weide.</p>
                    <p>Hier findet ihr mehr <Link prefetch={false} href='/rund-um-das-haus'>Eindrücke von unserem
                        Grundstück</Link>.</p>
                </Card>
                <Photo props={photos.Garten__Blick_vom_Grundstueck_im_Winter}/>
                <Photo props={photos.Garten__Terrasse_1}/>
                <Photo props={photos.Haus__Gastraum__Blick_auf_die_Terasse}/>
                {/* <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_4} /> */}
                <Photo props={photos.Ansichten__Das_Haus_von_oben_3}/>
            </Grid>
            <Grid>
                <Card width={400} height={1000} backgroundCyan={true}>
                    <p style={{backgroundColor: 'white'}}>Wir vermie&shy;ten keine ein&shy;zel&shy;nen Zimmer, sondern
                        nur das ganze Haus und die&shy;ses für min&shy;des&shy;tens zwei Nächte.</p>
                    <p>Alle Infos dazu findet ihr auf <Link href={{pathname: '/preise-und-buchung'}}
                                                            prefetch={false}>un&shy;ser&shy;er Seite zu Preisen und
                        Buch&shy;ung</Link>.</p>
                </Card>
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_1}/>
            </Grid>
            <Grid>
                <Card width={1950} height={1000} backgroundCyan={true}>
                    <p style={{backgroundColor: 'white'}}>Kratzeburg ist ein idyllisches Dorf inmitten vom
                        Müritz-Nationalpark. Es ist umgeben von klaren Seen und dichten Wäldern und bietet unzählige
                        Möglichkeiten zum Wandern, Radfah&shy;ren und Paddeln. </p>
                    <p><Link prefetch={false} href="/kratzeburg">Lest hier mehr über die Umgebung der Havel Alm</Link>.
                    </p>
                </Card>
                <Photo props={photos.Kratzeburg__Wanderweg_Richtung_Pieverstorf}/>
                <Photo props={photos.Kratzeburg__Radweg_zwischen_Liepen_und_Klein_Vielen_1}/>
                <Photo props={photos.Kratzeburg__Paddeln_auf_der_Havel_kurz_vor_Blankenfoerde}/>
            </Grid>
            <p>Ihr habt Fragen? Ruft uns an oder schreibt uns eine Mail.</p>
            <p>Ausserdem sind wir an vielen Wochen&shy;enden in Kratzeburg, gerne zeigen wir euch dann unser Haus.</p>

            <Nav verticalOffsetInVWs={30}/>
        </>
    )
}


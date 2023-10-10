import { default as TextCard } from '@/components/card/textCard';
import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import VerticallyAlignedDiv from '@/components/utils/verticallyAlignedDiv';
import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/nav/nav';

const title = "Havel Alm Kratzeburg"
const description = "68 Meter über Normalhöhennull, an der Quelle der Havel, 80 Minuten von Berlin per Regionalexpress"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>

            <Photo props={photos.Haus__Das_Haus_von_oben_2} priority={true} scale={75}
                className='color-cyan' linkToPhotoPage={false}>
                <h1 style={{ top: '9vw' }}>Havel Alm</h1>
                <div style={{ top: '47vw' }}>
                    <blockquote>68 Meter über Normalhöhennull</blockquote>
                    <blockquote>An der Quelle der Havel</blockquote>
                    <blockquote>80 Minuten von Berlin per Regionalexpress</blockquote>
                </div>
                <VerticallyAlignedDiv percentageOfViewWidth={151}>
                    <blockquote>Das Ferienhaus für</blockquote>
                    <blockquote> - Urlaube in grösseren Gruppen</blockquote>
                    <blockquote> - Familientreffen</blockquote>
                    <blockquote> - Workshops und Team Offsites</blockquote>
                </VerticallyAlignedDiv>
            </Photo>


            <Grid>
                <Photo props={photos.Haus__Das_Haus_vom_Garten_aus_Mai_2023} />
                <Photo props={photos.Haus__Gastraum__Gastraum_I} />
            </Grid>
            <div>
                <blockquote>200m², 6 Doppelzimmer, davon 5 mit zusätzlichem Hochbett</blockquote>
                <blockquote>Für bis zu 12 Erwachsene plus Kinder</blockquote>
                <blockquote>3 Bäder, grosser Gastraum, 100m² Terrasse, modern eingerichtete Küche</blockquote>
                <blockquote>90 Mbps Internet, WLAN im ganzen Haus</blockquote>
            </div>

            <Grid>
                <Photo props={photos.Haus__Gastraum__Sofa_1} />

                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_II} />

                <Photo props={photos.Haus__Flur_DG__Flur_DG_1} />
            </Grid>
            <Grid>
                <TextCard width={2000} height={1000} backgroundCyan={true}>
                    <p style={{backgroundColor:'white'}}>Die Havel Alm hat einen ca. 1000m² grossen Garten. Von der ca. 100m² grossen Terrasse habt ihr einen wundervollen Blick  auf einen Sumpf/ eine Weide.</p>
                    <p>Hier findet ihr mehr <Link href='/der-garten'>Eindrücke von unserem Grundstück</Link>.</p>
                </TextCard>
                <Photo props={photos.Garten__Blick_vom_Grundstueck_im_Winter} />
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_4} />
                <Photo props={photos.Garten__Terrasse_1} />
            </Grid>
            <Grid>
                <TextCard width={400} height={1000} backgroundCyan={true}>
                    <p style={{ backgroundColor: 'white' }}>Wir vermie&shy;ten keine ein&shy;zel&shy;nen Zimmer, sondern nur das ganze Haus und die&shy;ses für min&shy;des&shy;tens zwei Nächte.</p>
                    <p>Alle Infos dazu findet ihr auf <Link href={{ pathname: '/preise-und-buchung' }} prefetch={false}>un&shy;ser&shy;er Seite zu Preisen und Buch&shy;ung</Link>.</p>
                </TextCard>
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_I} />
            </Grid>
            <Grid>
                <TextCard width={1950} height={1000} backgroundCyan={true}>
                    <p style={{ backgroundColor: 'white' }}>Kratzeburg ist ein idyllisches Dorf inmitten vom Müritz-Nationalpark. Es ist umgeben von von klaren Seen und dichten Wäldern und bietet unzählige Möglichkeiten zum Wandern, Radfahren und Paddeln. </p>
                    <p><Link href="/kratzeburg">Lest hier mehr über die Umgebung der Havel Alm</Link>.</p>
                </TextCard>
                <Photo props={photos.Kratzeburg__Wanderweg_Richtung_Pieverstorf} />
                <Photo props={photos.Kratzeburg__Radweg_zwischen_Liepen_und_Klein_Vielen_1} />
                <Photo props={photos.Kratzeburg__Paddeln_auf_der_Havel_kurz_vor_Babke} />


            </Grid>

            <Nav verticalOffsetInVWs={30} />
        </>
    )
}


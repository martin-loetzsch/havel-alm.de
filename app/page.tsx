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
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_I} />
            </Grid>
            <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_2}>
                <h2>Der Garten</h2>
            </Photo>
            <Grid>
                <TextCard width={1000} height={1000}>
                    <p>Wir vermieten keine einzelnen Zimmer, sondern nur das ganze Haus und für mindestens zwei Nächte.</p>
                    <p>Alle Infos dazu findet ihr auf unserer Seite für <Link href={{pathname:'/preise-und-buchung'}} prefetch={false}>Preise und Buchung</Link>.</p>
                </TextCard>
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_I} />
            </Grid>
            <Grid>
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_1} />
                <Photo props={photos.Garten__Terrasse_1} />
                <Photo props={photos.Garten__Terrasse_2} />
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_4} />
                <Photo props={photos.Garten__Blick_vom_Grundstueck_im_Winter} />
                <Photo props={photos.Haus__Wegweiser_vor_dem_Haus} />
                <Photo props={photos.Haus__Ansicht_von_der_Strasse_im_Winter} priority={true} />
            </Grid>
            <Photo props={photos.Die_Umgebung__Badestelle_am_Kaebelicksee}>
                <h2>Die Umgebung</h2>
            </Photo>
            <Grid>
                <Photo props={photos.Die_Umgebung__Badestelle_am_Kaebelicksee_im_Winter}>

                </Photo>

                <Photo props={photos.Die_Umgebung__Auf_dem_zugefrorenen_Kaebelicksee} />
                <Photo props={photos.Die_Umgebung__Langlauf_Ski_fahren_auf_dem_Kaebelicksee} />
                <Photo props={photos.Die_Umgebung__Der_zugefrorene_Kaebelicksee} />

                <Photo props={photos.Die_Umgebung__Paddeln_auf_der_Havel} />
                <Photo props={photos.Die_Umgebung__Paddeln_auf_der_Havel_kurz_vor_Babke} />
                <Photo props={photos.Die_Umgebung__Auf_der_Havel_bei_Granzin} />

                <Photo props={photos.Die_Umgebung__Wanderweg_am_Granziner_See} />
                <Photo props={photos.Die_Umgebung__Wanderweg_Richtung_Pieverstorf} />
                <Photo props={photos.Die_Umgebung__Pilze_suchen_bei_Pieverstorf_1} />
                <Photo props={photos.Die_Umgebung__Pilze_suchen_bei_Pieverstorf_2} />

                <Photo props={photos.Die_Umgebung__Zwischen_Dambeck_und_Havelquelle} />
                <Photo props={photos.Die_Umgebung__Weg_nach_Dambeck} />
                <Photo props={photos.Die_Umgebung__Weg_von_Dambeck_nach_Bornhof_1} />
                <Photo props={photos.Die_Umgebung__Weg_von_Dambeck_nach_Bornhof_2} />
                <Photo props={photos.Die_Umgebung__Weg_von_Dambeck_nach_Bornhof_3} />
                <Photo props={photos.Die_Umgebung__Badestelle_am_Muehlensee__an_der_Havelquelle_} />
                <Photo props={photos.Die_Umgebung__Badestrand_mit_Steg_am_Dambecker_See} />

                <Photo props={photos.Die_Umgebung__Radweg_zwischen_Liepen_und_Klein_Vielen} />
                <Photo props={photos.Die_Umgebung__Radweg_zwischen_Liepe_und_Klein_Vielen} />
                <Photo props={photos.Die_Umgebung__Zwischen_Liepen_und_Klein_Vielen} />
                <Photo props={photos.Die_Umgebung__Auf_dem_Schäferberg__96m__zwischen_Pieverstorf_und_Hartwigsdorf} />

                <Photo props={photos.Die_Umgebung__Weg_zwischen_Pieverstorf_und_Kratzeburg} />
                <Photo props={photos.Die_Umgebung__Hochsitz_am_Dambecker_See} />

                <Photo props={photos.Die_Umgebung__Der_Wald_hinter_dem_Haus} />
                <Photo props={photos.Die_Umgebung__Am_Roethsee_zwischen_Dambeck_und_Kratzeburg} />
                <Photo props={photos.Die_Umgebung__Kuehe_auf_der_Weide_in_Richtung_Pieverstorf_1} />

                <Photo props={photos.Die_Umgebung__Kuehe_auf_der_Weide_in_Richtung_Pieverstorf_2} />
                <Photo props={photos.Die_Umgebung__Radweg_in_Richtung_Pieverstorf} />
            </Grid>

            <Nav verticalOffsetInVWs={240} />
        </>
    )
}


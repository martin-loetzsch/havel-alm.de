import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import type { Metadata } from 'next';
import Nav from '../../components/nav/nav'
import VerticallyAlignedDiv from "@/components/utils/verticallyAlignedDiv";
import { useMemo } from "react";
import dynamic from 'next/dynamic';
import Card from "@/components/card/card";

const title = "Kratzeburg"
const description = "Radfahren, wandern und paddeln im Müritz-Nationalpark"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    const Map = useMemo(() => dynamic(
        () => import('./map'),
        {
            //loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <>
            <Photo props={photos.Kratzeburg__Kratzeburg_von_oben}>
                <h1 className='color-cyan'>Kratzeburg</h1>
                <VerticallyAlignedDiv percentageOfViewWidth={43}>
                    <p className="color-cyan" style={{ marginLeft: '1vw', textAlign: 'center' }}>Havel Alm<br />↓</p>
                </VerticallyAlignedDiv>
            </Photo>
            <p>
                <a href="http://www.kratzeburg.de/">Kratzeburg</a> liegt inmitten der Mecklenburgischen Seen&shy;platte und ist der ideale Ausgangspunkt für <a href="http://www.kratzeburg.de/kultur-und-freizeitangebote/rad-wasser-und-wanderwege">Wanderun&shy;gen, Radtouren und Paddeltouren</a> durch den <a href="https://www.mueritz-nationalpark.de">Müritz-Nationalpark</a>.
            </p>
            <div style={{
                width: '100%', height: '85vh',
                backgroundColor: '#eeeeee'
            }}>
                <Map />
            </div>
            <p>Kratzeburg ist <a href="https://www.bahnhof.de/kratzeburg/ankunft">sehr gut per Bahn erreichbar</a>. Wir reisen selbst fast immer mit der Bahn aus Berlin an (wir haben kein eigen&shy;es Auto) und können das meistens empfehlen.</p>
            <p className="background-cyan">Vom Bahnhof zur Havel Alm sind es 700 Meter.</p>
            <Grid>
                <Photo props={photos.Kratzeburg__Bahnhof_Kratzeburg_1} />
                <Photo props={photos.Kratzeburg__Bahnhof_Kratzeburg_2} />

            </Grid>
            <Grid>
                <Card width={700} height={1000}>
                    <p>Auch 700 Meter von der Havel Alm entfernt liegt die Badestelle am <strong>Käbelicksee</strong>, einem der saubersten Seen in Mecklenburg-Vorpommern.</p>
                </Card>
                <Photo props={photos.Kratzeburg__Strand_am_Kaebelicksee} />
                <Photo props={photos.Kratzeburg__Badestelle_am_Kaebelicksee_im_Winter} />
                <Photo props={photos.Kratzeburg__Badestelle_am_Kaebelicksee_2} />
            </Grid>
            <p>Weitere Impressionen aus der Umgebung:</p>
            <Grid>
                <Photo props={photos.Kratzeburg__Badestelle_beim_Familienferienpark_Dambeck} />

                <Photo props={photos.Kratzeburg__Auf_dem_zugefrorenen_Kaebelicksee} />
                <Photo props={photos.Kratzeburg__Langlauf_Ski_fahren_auf_dem_Kaebelicksee} />
                <Photo props={photos.Kratzeburg__Der_zugefrorene_Kaebelicksee} />

                <Photo props={photos.Kratzeburg__Paddeln_auf_der_Havel} />
                <Photo props={photos.Kratzeburg__Paddeln_auf_der_Havel_kurz_vor_Babke} />
                <Photo props={photos.Kratzeburg__Auf_der_Havel_bei_Granzin} />

                <Photo props={photos.Kratzeburg__Wanderweg_am_Granziner_See} />
                <Photo props={photos.Kratzeburg__Wanderweg_Richtung_Pieverstorf} />
                <Photo props={photos.Kratzeburg__Pilze_suchen_bei_Pieverstorf_1} />
                <Photo props={photos.Kratzeburg__Pilze_suchen_bei_Pieverstorf_2} />

                <Photo props={photos.Kratzeburg__Zwischen_Dambeck_und_Havelquelle} />
                <Photo props={photos.Kratzeburg__Weg_nach_Dambeck} />
                <Photo props={photos.Kratzeburg__Weg_von_Dambeck_nach_Bornhof_1} />
                <Photo props={photos.Kratzeburg__Weg_von_Dambeck_nach_Bornhof_2} />
                <Photo props={photos.Kratzeburg__Weg_von_Dambeck_nach_Bornhof_3} />
                <Photo props={photos.Kratzeburg__Badestelle_am_Muehlensee__an_der_Havelquelle_} />
                <Photo props={photos.Kratzeburg__Badestrand_mit_Steg_am_Dambecker_See} />

                <Photo props={photos.Kratzeburg__Radweg_zwischen_Liepen_und_Klein_Vielen_1} />
                <Photo props={photos.Kratzeburg__Radweg_zwischen_Liepen_und_Klein_Vielen_2} />
                <Photo props={photos.Kratzeburg__Zwischen_Liepen_und_Klein_Vielen} />
                <Photo props={photos.Kratzeburg__Auf_dem_Schaeferberg__96m__zwischen_Pieverstorf_und_Hartwigsdorf} />

                <Photo props={photos.Kratzeburg__Weg_zwischen_Pieverstorf_und_Kratzeburg} />
                <Photo props={photos.Kratzeburg__Hochsitz_am_Dambecker_See} />

                <Photo props={photos.Kratzeburg__Der_Wald_hinter_dem_Haus} />
                <Photo props={photos.Kratzeburg__Am_Roethsee_zwischen_Dambeck_und_Kratzeburg} />
                <Photo props={photos.Kratzeburg__Kuehe_auf_der_Weide_in_Richtung_Pieverstorf_1} />

                <Photo props={photos.Kratzeburg__Kuehe_auf_der_Weide_in_Richtung_Pieverstorf_2} />
                <Photo props={photos.Kratzeburg__Radweg_in_Richtung_Pieverstorf} />
                <Photo props={photos.Kratzeburg__Wiesen_zwischen_Havelquelle_und_Ankershagen} />
                <Photo props={photos.Kratzeburg__Weg_zwischen_Pieverstorf_und_Dambeck_2} />
                <Photo props={photos.Kratzeburg__Kuehe_am_Granziner_See} />
                <Photo props={photos.Kratzeburg__Am_Dambecker_See} />
            </Grid>

            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


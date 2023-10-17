import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import type { Metadata } from 'next';
import Nav from '../../components/nav/nav'
import VerticallyAlignedDiv from "@/components/utils/verticallyAlignedDiv";

const title = "Kratzeburg"
const description = "Radfahren, wandern und paddeln im Müritz-Nationalpark"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>
            <Photo props={photos.Kratzeburg__Kratzeburg_von_oben}>
                <h1 className='color-cyan'>Kratzeburg</h1>
                <VerticallyAlignedDiv percentageOfViewWidth={43}>
                    <p className="color-cyan" style={{marginLeft:'1vw',textAlign:'center'}}>Havel Alm<br/>↓</p>
                </VerticallyAlignedDiv>
            </Photo>
            <p>
                <a href="http://www.kratzeburg.de/">Kratzeburg</a> liegt inmitten der Mecklenburgischen Seenplatte und ist der ideale Ausgangspunkt für Ausflüge in den <a href="https://www.mueritz-nationalpark.de">Müritz-Nationalpark</a>.
            </p>
            <p className='background-cyan'>Diese Unterseite befindet sich noch im Aufbau, doch hier schon einmal einige Eindrücke aus der Umgebung der Havel Alm:</p>
            <Grid>
                <Photo props={photos.Kratzeburg__Badestelle_am_Kaebelicksee_im_Winter}>

                </Photo>

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
            </Grid>

            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


import { default as Card, default as TextCard } from '@/components/card/textCard';
import getMetaData from '@/components/utils/getMetaData';
import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import VerticallyAlignedDiv from '@/components/utils/verticallyAlignedDiv';
import grundrissDG from '@/public/grundrisse/Grundriss DG.svg';
import grundrissEG from '@/public/grundrisse/Grundriss EG.svg';
import type { Metadata } from 'next';
import Image from "next/image";
import Nav from '../../components/nav/nav';

const title = "Die Umgebung"
const description = "Kratzeburg und der Müritz-Nationalpark"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>
            <Photo props={photos.Die_Umgebung__Badestelle_am_Käbelicksee}>
                <h1 className='color-cyan'>Die Umgebung</h1>
            </Photo>
            <Grid>
                <Photo props={photos.Die_Umgebung__Badestelle_am_Käbelicksee_im_Winter}>

                </Photo>

                <Photo props={photos.Die_Umgebung__Auf_dem_zugefrorenen_Kaebelicksee} />
                <Photo props={photos.Die_Umgebung__Langlauf_Ski_fahren_auf_dem_Kaebelicksee} />
                <Photo props={photos.Die_Umgebung__Der_zugefrorene_Kaebelicksee} />

                <Photo props={photos.Die_Umgebung__Paddeln_auf_der_Havel} />
                <Photo props={photos.Die_Umgebung__Paddeln_auf_der_Havel_kurz_vor_Babke} />
                <Photo props={photos.Die_Umgebung__Auf_der_Havel_bei_Granzin} />

                <Photo props={photos.Die_Umgebung__Wanderweg_am_Granziner_See} />
                <Photo props={photos.Die_Umgebung__Wanderweg_Richtung_Pieversdorf} />
                <Photo props={photos.Die_Umgebung__Wanderweg_nach_Dambeck} />
                <Photo props={photos.Die_Umgebung__Pilze_suchen_bei_Pieversdorf_1} />
                <Photo props={photos.Die_Umgebung__Pilze_suchen_bei_Pieversdorf_2} />

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
                <Photo props={photos.Die_Umgebung__Auf_dem_Schaeferberg__96m__zwischen_Pieversdorf_und_Hartwigsdorf} />

                <Photo props={photos.Die_Umgebung__Weg_zwischen_Pieversdorf_und_Kratzeburg} />
                <Photo props={photos.Die_Umgebung__Hochsitz_am_Glambecker_See} />

                <Photo props={photos.Die_Umgebung__Der_Wald_hinter_dem_Haus} />
                <Photo props={photos.Die_Umgebung__Am_Roethsee_zwischen_Dambeck_und_Kratzeburg} />
                <Photo props={photos.Die_Umgebung__Kuehe_auf_der_Weide_in_Richtung_Pieversdorf_1} />

                <Photo props={photos.Die_Umgebung__Kuehe_auf_der_Weide_in_Richtung_Pieversdorf_2} />
                <Photo props={photos.Die_Umgebung__Radweg_in_Ricktung_Pieversdorf} />
            </Grid>

            <Nav verticalOffsetInVWs={40} />
        </>
    )
}


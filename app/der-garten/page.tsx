import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import type { Metadata } from 'next';
import Nav from '../../components/nav/nav';
import PlanGrundstück from '@/public/grundrisse/Plan Grundstück.svg';
import Image from "next/image";
import TextCard from "@/components/card/textCard";

const title = "Der Garten"
const description = "Rund um das Haus"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>
            <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_2} priority={true}>
                <h1 className='color-cyan'>Der Garten</h1>
            </Photo>
            <p className="background-cyan">Diese Seite befindet sich noch im Aufbau, aber hier schon einmal einige Impressionen:</p>
            <Grid>
                <Photo props={photos.Ansichten__Das_Haus_von_oben_2} />
                <Photo props={photos.Ansichten__Das_Haus_von_oben_4} />
                <TextCard width={760} height={810}>
                    <Image src={PlanGrundstück} alt={'Havel Alm Kratzeburg Plan Grundstück'}
                        unoptimized style={{ width: '100%', height: 'auto' }}
                    /></TextCard>
            </Grid>
            <Grid>
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_1} />
                <Photo props={photos.Garten__Terrasse_1} />
                <Photo props={photos.Garten__Terrasse_2} />
                <Photo props={photos.Garten__Der_Sumpf_hinter_dem_Haus_von_oben} />
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_4} />
                <Photo props={photos.Garten__Blick_vom_Grundstueck_im_Winter} />
                <Photo props={photos.Garten__Wegweiser_vor_dem_Haus} />
                <Photo props={photos.Ansichten__Ansicht_von_der_Strasse_im_Winter}/>
            </Grid>


            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import type { Metadata } from 'next';
import Nav from '../../components/nav/nav';
import PlanGrundstück from '@/public/grundrisse/Plan Grundstück.svg';
import Image from "next/image";
import TextCard from "@/components/card/textCard";

const title = "Rund um das Haus"
const description = "Die direkte Umgebung der Havel Alm"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>

            <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_4} priority={true} linkToPhotoPage={false}>
                <h1 className="color-cyan">{title}</h1>
            </Photo>
            <Grid>
                <TextCard width={800} height={810}>
                    <p>Die Havel Alm steht auf ei&shy;nem ca. 1000m² grossen Grund&shy;stück direkt am Ortseingang von Kratzeburg.</p>
                </TextCard>
                <Photo props={photos.Garten__Der_Sumpf_hinter_dem_Haus_von_oben} />
                <Photo props={photos.Ansichten__Das_Haus_von_oben_2} />
                <TextCard width={760} height={810}>
                    <Image src={PlanGrundstück} alt={'Havel Alm Kratzeburg Plan Grundstück'}
                        unoptimized style={{ width: '100%', height: 'auto' }}
                    /></TextCard>
                <Photo props={photos.Ansichten__Das_Haus_von_oben_4} />
            </Grid>
            <Grid>
                <TextCard width={800} height={600}>
                    <p>Auf der von der Strasse ab&shy;gewandten Seite ist eine ca. 100m² gro&shy;ße Terrasse.</p>
                </TextCard>
                <Photo props={photos.Garten__Terrasse_1} />
                <Photo props={photos.Garten__Terrasse_2} />
            </Grid>
            <Grid>
                <TextCard width={1000} height={400} backgroundCyan={true}>
                    <p>Von der Terrasse habt ihr zu jeder Jahreszeit einen wunderschönen Blick auf einen Sumpf und dahinter einige Weiden.</p>
                </TextCard>
                <Photo props={photos.Garten__Blick_vom_Grundstueck_im_Winter} />

                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_1} />
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_2} />
                <Photo props={photos.Garten__Schafe_auf_der_Weide_hinter_dem_Grundstueck} />
                <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_3} />

            </Grid>
            <Grid>
                <TextCard width={1000} height={1200} backgroundCyan={true}>
                    <p>Vor dem Haus verläuft die Dorf&shy;straße. Diese ist manchmal laut, ist aber auch keine Durchs&shy;gangs&shy;straße (sie ended drei Dörfer weiter).</p>
                </TextCard>
                <Photo props={photos.Ansichten__Dorfeingang_von_Kratzeburg} />
            </Grid>
            <Grid>
                <Photo props={photos.Garten__Almauftrieb_April_2023} />
                <Photo props={photos.Ansichten__Ansicht_von_der_Strasse_im_Winter} />
                <Photo props={photos.Garten__Wegweiser_vor_dem_Haus} />

                <TextCard width={750} height={1000}>
                    <p>Der <a href="https://bike-berlin-copenhagen.com/">Fernradweg Berlin-Kopenhagen</a> führt direkt am Haus vorbei.</p>

                </TextCard>

            </Grid>
            <Grid>
                <TextCard width={2000} height={700} backgroundCyan={true}>
                    <p>In drei Hochbeeten wachsen Salat, Tomaten, Bohnen, Mangold, Gewürze und mehr.</p>
                    <p>Bedient euch sehr gerne daraus wenn wir nicht da sind.</p>
                </TextCard>
                <Photo props={photos.Garten__Hochbeet_1} />
            </Grid>
            <Grid>
                <Photo props={photos.Garten__Hochbeet_2} />
                <Photo props={photos.Garten__Hochbeet_3} />
                <Photo props={photos.Garten__Hochbeet_5} />
                <Photo props={photos.Garten__Hochbeet_4} />
                <Photo props={photos.Garten__Hochbeet_6} />
                <Photo props={photos.Garten__Hochbeet_7} />
            </Grid>


            <Nav verticalOffsetInVWs={34} />
        </>
    )
}


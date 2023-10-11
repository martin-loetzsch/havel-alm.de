import { default as Card, default as TextCard } from '@/components/card/textCard';
import Grid from "@/components/grid/grid";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import grundrissDG from '@/public/grundrisse/Grundriss DG.svg';
import grundrissEG from '@/public/grundrisse/Grundriss EG.svg';
import type { Metadata } from 'next';
import Image from "next/image";
import Nav from '../../components/nav/nav';

const title = "Das Haus"
const description = "Alle Zimmer, die Ausstattung & Grundrisse"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>
            
            <Photo props={photos.Haus__Das_Haus_vom_Garten_aus_Mai_2023} priority={true}>
                <h1 className='color-cyan'>Das Haus</h1>
            </Photo>
            <Grid>
                <TextCard width={3000} height={2000} backgroundCyan={true}>
                    <p>Die Havel Alm wurde ca. 1900 als Stallgebäude am Ortseingang von Kratzeburg errichtet. 2021 übernahmen wir das bis dahin als Cafe genutzte Haus und bauten es bis Mai 2023 ökologisch zu einem Ferien- und Seminarhaus um.</p>
                </TextCard>
                <Photo props={photos.Haus__Blick_von_der_Strasse_Februar_2023} />
            </Grid>
            <Grid>
                <Photo props={photos.Haus__Gastraum__Eingang} />
                <Photo props={photos.Haus__Gastraum__Gastraum_I} />
            </Grid>

            <p>Im <b>Erdgeschoss</b> des Hauses befindet sich ein 60m² grosser Gastraum mit Blick auf eine Weide, die Küche, ein Arbeitszimmer, zwei Bäder sowie ein 12m² grosses Doppelzimmer.</p>

            <Image src={grundrissEG} alt={'Havel Alm Kratzeburg Grundriss Erdgeschoss'}
                unoptimized style={{ width: '100%', height: 'auto' }}
            />
            <Grid>
                <Card width={650} height={1000} >
                    <p>An drei Ess&shy;tischen finden bis zu 20 Personen Platz.</p>
                </Card>
                <Photo props={photos.Haus__Gastraum__Gastraum_II} />
                <Photo props={photos.Haus__Gastraum__Gastraum_III} />
                <Photo props={photos.Haus__Gastraum__Sofa_1} className='color-cyan'>
                    <p>Das Sofa mit Blick auf den Garten</p>
                </Photo>
                <Photo props={photos.Haus__Gastraum__Sofa_2} />
            </Grid>

            <Grid>
                <Card width={1500} height={1000} backgroundCyan={true}>
                    <p>In der komplett ausgestat&shy;teten <b>Küche</b> kann für viele Personen gekocht werden.</p>
                    <p>Es gibt einen grossen Induktionsherd, zwei Back&shy;öfen, einen Kühl&shy;schrank, eine Spülmaschine sowie eine Kaffemaschine.</p>
                </Card>
                <Photo props={photos.Haus__Kueche___Kueche_1} />
                <Photo props={photos.Haus__Kueche___Kueche_3} />
                <Photo props={photos.Haus__Kueche___Kueche_4} />
            </Grid>
            <Grid>
                <Card width={700} height={1000}>
                    <p>Neben dem Eingang liegt das 12m² grosse <b>Zimmer 1</b>.</p>
                    <p>Vom 200x180 cm grossen Doppelbett hat man einen Blick auf die Weide hinter dem Grundstück.</p>
                </Card>
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_I} />
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_II} />
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_III} />
            </Grid>

            <Grid>
                <Card width={700} height={1000} backgroundCyan={true}>
                    <p>In der hinteren Ecke des Hauses gibt es ein 8m² grosses <b>Arbeitszimmer</b> mit Sofa.</p>
                </Card>
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_1} />
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_2} />
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_3} />
            </Grid>
            <p>Im Erdgeschoss gibt es zwei <b>Bäder</b>, eines davon mit Dusche und eins mit einer Badewanne.</p>
            <Grid>
                <Photo props={photos.Haus__Bad_2__Bad_2_I} />
                <Photo props={photos.Haus__Bad_2__Bad_2_II} />
                <Photo props={photos.Haus__Bad_2__Bad_2_III} />
            </Grid>
            <Grid>
                <Card width={900} height={1000} backgroundCyan={true}>
                    <p>Über eine breite Treppe glangt man in das <b>Dachge&shy;schoss</b>.</p>
                </Card>
                <Photo props={photos.Haus__Treppe__Treppe_2} />
                <Photo props={photos.Haus__Treppe__Treppe_1} />
                <Photo props={photos.Haus__Treppe__Treppe_3} />

                <Photo props={photos.Haus__Flur_DG__Flur_DG_1} />
                <Photo props={photos.Haus__Flur_DG__Flur_DG_2} />

            </Grid>
            <Image src={grundrissDG} alt={'Havel Alm Kratzeburg Grundriss Dachgeschoss'}
                unoptimized style={{ width: '100%', height: 'auto' }}
            />

            <p>Im Dachgeschoss gibt es <b>5</b> nahezu identische Kammern (<b>Zimmer 2 bis 6</b>). Jedes der Zimmer hat ein Doppelbett (200x140cm) sowie ein Hochbett (200x70cm) für Kinder.</p>
            <p><b>Achtung!</b> Die Doppelbetten ist nur von einer Seite zugänglich, d.h. darin übernachtende Personen sollten sich gut kennen.</p>
            <Grid>
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_I} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_II} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_III} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_IV} />
            </Grid>
            <Grid>
                <Card width={500} height={1000}>
                    <p>Im Obergeschoss befindet sich auch ein drittes Bad mit Dusche.</p>
                </Card>
                <Photo props={photos.Haus__Bad_3__Bad_3_II} />
                <Photo props={photos.Haus__Bad_3__Bad_3_I} />
                <Photo props={photos.Haus__Bad_3__Bad_3_III} />
            </Grid>
            <Grid>
                <Card width={2000} height={1000}>
                    <p>Auf den Flächen vor den Kammern gibt es weitere Gelegenheiten zum Arbeiten, Lesen usw.</p>
                </Card>
                <Photo props={photos.Haus__Flur_DG__Flur_DG_3} />
                <Photo props={photos.Haus__Flur_DG__Flur_DG_4} />

            </Grid>
            <Nav verticalOffsetInVWs={58}/>
        </>
    )
}


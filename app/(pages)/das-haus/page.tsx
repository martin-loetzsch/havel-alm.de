import Card from '@/app/components/grid/card';
import Grid from "@/app/components/grid/grid";
import Nav from '@/app/components/nav/nav';
import Photo from '@/app/(photos)/photo';
import photos from '@/app/(photos)/processedPhotos';
import getMetaData from '@/app/lib/getMetaData';
import grundrissDG from '@/public/grundrisse/Grundriss DG.svg';
import grundrissEG from '@/public/grundrisse/Grundriss EG.svg';
import type { Metadata } from 'next';
import Image from "next/image";

const title = "Das Haus"
const description = "Alle Zimmer, die Ausstattung & Grundrisse"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>

            <Photo props={photos.Ansichten__Das_Haus_vom_Garten_aus} priority={true}>
                <h1 className='color-cyan'>Das Haus</h1>
            </Photo>
            <Grid>
                <Card width={3000} height={2000}>
                    <p>Im <b>Erdgeschoss</b> des Hauses befindet sich ein 60m² großer Gastraum mit Blick auf eine Weide, die Küche, ein Arbeits&shy;zimmer, zwei Bäder sowie ein 12m² großes Doppelzimmer.</p>
                </Card>
                <Photo props={photos.Haus__Gastraum__Gastraum_1} priority={true}/>
                <Photo props={photos.Haus__Gastraum__Eingang} priority={true}/>
                <Photo props={photos.Haus__Gastraum__Sofa_1}/>
                <Photo props={photos.Haus__Gastraum__Sofa_2} />
                
            </Grid>



            <Image src={grundrissEG} alt={'Havel Alm Kratzeburg Grundriss Erdgeschoss'}
                unoptimized style={{ width: '100%', height: 'auto' }}
            />
            <Grid>
                <Card width={650} height={1000} >
                    <p>An drei Ess&shy;tischen finden bis zu 20 Personen Platz.</p>
                </Card>
                <Photo props={photos.Haus__Gastraum__Gastraum_2} />
                <Photo props={photos.Haus__Gastraum__Gastraum_3} />
            </Grid>

            <Grid>
                <Card width={1550} height={1000} backgroundCyan={true}>
                    <p>In der komplett ausge&shy;stat&shy;teten <b>Küche</b> kann für viele Personen gekocht wer&shy;den.</p>
                    <p>Es gibt einen großen Induktionsherd, zwei Back&shy;öfen, einen Kühl&shy;schrank, eine Spülmaschine sowie eine Kaffema&shy;schine.</p>
                </Card>
                <Photo props={photos.Haus__Kueche__Kueche_3} />
                <Photo props={photos.Haus__Kueche__Kueche_1} />
                <Photo props={photos.Haus__Kueche__Kueche_4} />
                <Photo props={photos.Haus__Kueche__Backoefen_1} />
                <Photo props={photos.Haus__Kueche__Geschirr_1} />
                <Photo props={photos.Haus__Kueche__Geschirr_2} />
                
            </Grid>
            <Grid>
                <Card width={700} height={1000}>
                    <p>Neben dem Eingang liegt das 12m² große <b>Zimmer 1</b>.</p>
                    <p>Vom 200x180 cm großen Doppelbett hat man einen Blick auf die Weide hinter dem Grundstück.</p>
                </Card>
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_1} />
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_2} />
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_3} />
            </Grid>

            <Grid>
                <Card width={1400} height={1000} backgroundCyan={true}>
                    <p>In der hinteren Ecke des Hauses gibt es ein 8m² grosses <b>Arbeits&shy;zimmer</b> mit einem Sofa.</p>
                    <p>Hier könnte im Notfall auch geschlafen werden (Achtung: Fenster zur Strasse).</p>
                </Card>
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_3} />
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_1} />
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_2} />
            </Grid>
            <p>Im Erdgeschoss gibt es zwei <b>Bäder</b>, eines davon mit Dusche und eins mit einer Badewanne.</p>
            <Grid>
                <Photo props={photos.Haus__Bad_2__Bad_2_1} />
                <Photo props={photos.Haus__Bad_2__Bad_2_2} />
                <Photo props={photos.Haus__Bad_2__Bad_2_3} />
            </Grid>
            <Grid>
                <Card width={900} height={1000} backgroundCyan={true}>
                    <p>Über eine breite Treppe glangt man in das <b>Dachge&shy;schoss</b>.</p>
                </Card>
                <Photo props={photos.Haus__Treppe__Treppe_1} />
                <Photo props={photos.Haus__Treppe__Treppe_2} />
                <Photo props={photos.Haus__Treppe__Treppe_3} />

                <Photo props={photos.Haus__Flur_DG__Flur_DG_1} />
                <Photo props={photos.Haus__Flur_DG__Flur_DG_2} />

            </Grid>
            <Image src={grundrissDG} alt={'Havel Alm Kratzeburg Grundriss Dachgeschoss'}
                unoptimized style={{ width: '100%', height: 'auto' }}
            />

            <p>Im Dachgeschoss gibt es <b>5</b> nahezu identische Kammern (<b>Zimmer 2 bis 6</b>). Jedes der Zimmer hat ein Doppelbett (200x140cm) sowie ein Hochbett (200x70cm) für Kinder.</p>
            <p><b>Achtung!</b> Die Doppelbetten ist nur von einer Seite zugänglich, d.h. darin über&shy;nachtende Personen sollten sich gut kennen.</p>
            <Grid>
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_1} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_2} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_3} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_4} />
            </Grid>
            <Grid>
                <Card width={500} height={1000}>
                    <p>Im Obergeschoss befindet sich auch ein drittes Bad mit Dusche.</p>
                </Card>
                <Photo props={photos.Haus__Bad_3__Bad_3_2} />
                <Photo props={photos.Haus__Bad_3__Bad_3_1} />
                <Photo props={photos.Haus__Bad_3__Bad_3_3} />
            </Grid>
            <Grid>
                <Card width={2000} height={1000}>
                    <p>Auf den Flächen vor den Kammern gibt es weitere Gelegenheiten zum Arbeiten, Lesen usw.</p>
                </Card>
                <Photo props={photos.Haus__Flur_DG__Flur_DG_3} />
                <Photo props={photos.Haus__Flur_DG__Flur_DG_4} />

            </Grid>
            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


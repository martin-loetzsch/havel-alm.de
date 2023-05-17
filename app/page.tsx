import Photo from '@/components/photo/photo'
import Grid from "@/components/grid/grid"
import type { Metadata } from 'next';
import Image from "next/image"
import photos from '@/components/photos'
import grundrissEG from '@/public/grundrisse/Grundriss EG.svg'
import grundrissDG from '@/public/grundrisse/Grundriss DG.svg'
import TextCard from '@/components/card/textCard';
import Card from '@/components/card/textCard';

const title = "Havel Alm Kratzeburg"
const description = "68 Meter über Normalhöhennull, an der Quelle der Havel, 80 Minuten von Berlin per Regionalexpress"

export const metadata: Metadata = {
    title: title,
    description: description,
    authors: [{ name: 'Havel Alm', url: 'https://havel-alm.de' }],
    openGraph: {
        title: title,
        description: description,
        url: 'https://havel-alm.de/',
        siteName: 'havel-alm.de',
        locale: 'de-DE',
    },

    icons: {
        icon: '/favicon.ico',
    }
}

export default function Home() {
    return (
        <>
            <Photo props={photos.Haus__Das_Haus_von_oben_1} priority={true} scale={70}
                className='color-cyan' linkToPhotoPage={false}>
                <h1>Havel Alm</h1>
                <div style={{ top: '35vw' }}>
                    <blockquote>68 Meter über Normalhöhennull</blockquote>
                    <blockquote>An der Quelle der Havel</blockquote>
                    <blockquote>80 Minuten von Berlin per Regionalexpress</blockquote>
                </div>
                <div style={{ top: '80vw' }}>
                    <blockquote>Das Ferienhaus für</blockquote>
                    <blockquote> - Urlaube in grösseren Gruppen</blockquote>
                    <blockquote> - Familientreffen</blockquote>
                    <blockquote> - Workshops und Team Offsites</blockquote>
                </div>
                <div style={{ top: '130vw' }}>
                    <blockquote>200m², 6 Doppelzimmer, davon 5 mit zusätzlichem Hochbett</blockquote>
                    <blockquote>Für bis zu 12 Erwachsene plus Kinder</blockquote>
                    <blockquote>3 Bäder, grosser Gastraum, 100m² Terrasse, modern eingerichtete Küche</blockquote>
                    <blockquote>90 Mbps Internet, WLAN im ganzen Haus</blockquote>
                </div>

                <div style={{ 'top': '213vw' }}>
                    <p>Havel Alm <a href="https://sabine-boettger.de">Sabine Boettger</a> und <a
                        href="https://martin-loetzsch.de">Martin Loetzsch</a> GbR
                    </p>
                    <p>
                        <a href="https://goo.gl/maps/AE6Nh2RedGxnfaSi9">Dorfstr. 2a, 17237 Kratzeburg</a>
                    </p>
                    <p>
                        <a href="mailto:info@havel-alm.de">info@havel-alm.de</a>
                    </p>
                    <p>+49 178 6803711</p>
                </div>
            </Photo>
            <Photo props={photos.Haus__Das_Haus_vom_Garten_aus_Mai_2023} priority={true}>
                <h2 className='color-cyan'>Das Haus</h2>
            </Photo>
            <Grid>
                <TextCard width={2000} height={1000} backgroundCyan={true}>
                    <p>Die Havel Alm wurde ca. 1900 als Stallgebäude am Ortseingang von Kratzeburg errichtet. 2021 übernahmen wir das bis dahin als Cafe genutzte Haus und bauten es bis Mai 2023 ökologisch zu einem Ferien- und Seminarhaus um.</p>
                </TextCard>
                <Photo props={photos.Haus__Blick_von_der_Strasse_February_2023} />
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
                <Photo props={photos.Haus__Kueche___Kueche___1} />
                <Photo props={photos.Haus__Kueche___Kueche___3} />
                <Photo props={photos.Haus__Kueche___Kueche___4} />
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
            <Photo props={photos.Garten__Blick_aus_dem_Garten_nach_Norden_2}>
                <h2>Der Garten</h2>
            </Photo>
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

        </>
    )
}


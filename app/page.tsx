import Photo from '../components/photo/photo'
import Grid from "../components/grid/grid"
import type { Metadata } from 'next';
import Image from "next/image"
import photos from '../components/photos'
import grundrissEG from '../public/grundrisse/Grundriss EG.svg'
import grundrissDG from '../public/grundrisse/Grundriss DG.svg'

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
                <div style={{ top: '133vw' }}>
                    <blockquote>200m², 6 Doppelzimmer, davon 5 mit zusätzlichem Hochbett</blockquote>
                    <blockquote>Für bis zu 12 Erwachsene plus Kinder</blockquote>
                    <blockquote>3 Bäder, grosszügiger Gastraum, 100m² Terasse, professionell eingerichtete Küche</blockquote>
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
            <Grid>
                <Photo props={photos.Haus__Ansicht_von_der_Strasse_im_Winter} priority={true}>
                    <h2>Das Haus</h2>
                </Photo>
                <Photo props={photos.Haus__Das_Haus_vom_Garten_aus_Mai_2023} />
                <Photo props={photos.Haus__Blick_von_der_Strasse_February_2023} />
                <Photo props={photos.Haus__Wegweiser_vor_dem_Haus} />
            </Grid>
            <Image src={grundrissEG} alt={'Havel Alm Kratzeburg Grundriss Erdgeschoss'}
                unoptimized style={{ width: '100%', height: 'auto' }}
            />
            <Image src={grundrissDG} alt={'Havel Alm Kratzeburg Grundriss Dachgeschoss'}
                unoptimized style={{ width: '100%', height: 'auto' }}
            />
            <Grid>
                <Photo props={photos.Haus__Gastraum__Gastraum_I} />
                <Photo props={photos.Haus__Gastraum__Gastraum_II} />
                <Photo props={photos.Haus__Gastraum__Gastraum_III} />
                <Photo props={photos.Haus__Gastraum__Sofa_1} />
                <Photo props={photos.Haus__Gastraum__Sofa_2} />
                <Photo props={photos.Haus__Gastraum__Eingang} />
            </Grid>
            <Grid>
                <Photo props={photos.Haus__Kueche__Kueche_I} />
                <Photo props={photos.Haus__Kueche__Kueche_II} />
                <Photo props={photos.Haus__Kueche__Kueche_III} />
                <Photo props={photos.Haus__Kueche__Kueche_IV} />
            </Grid>
            <Grid>
                <Photo props={photos.Haus__Bad_2__Bad_2_I} />
                <Photo props={photos.Haus__Bad_2__Bad_2_II} />
                <Photo props={photos.Haus__Bad_2__Bad_2_III} />
            </Grid>
            <Grid>

                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_1} />
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_2} />
                <Photo props={photos.Haus__Arbeitszimmer__Arbeitszimmer_3} />
            </Grid>
            <Grid>
                <Photo props={photos.Haus__Treppe__Treppe_1} />
                <Photo props={photos.Haus__Treppe__Treppe_2} />
                <Photo props={photos.Haus__Treppe__Treppe_3} />

                <Photo props={photos.Haus__Flur_DG__Flur_DG_1} />
                <Photo props={photos.Haus__Flur_DG__Flur_DG_2} />
                <Photo props={photos.Haus__Flur_DG__Flur_DG_3} />
                <Photo props={photos.Haus__Flur_DG__Flur_DG_4} />

            </Grid>
            <Grid>
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_I} />
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_II} />
                <Photo props={photos.Haus__Zimmer_1__Zimmer_1_III} />
            </Grid>
            <Grid>
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_I} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_II} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_III} />
                <Photo props={photos.Haus__Zimmer_DG__Zimmer_DG_IV} />
            </Grid>
            <Grid>
                <Photo props={photos.Haus__Bad_3__Bad_3_I} />
                <Photo props={photos.Haus__Bad_3__Bad_3_II} />
                <Photo props={photos.Haus__Bad_3__Bad_3_III} />
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


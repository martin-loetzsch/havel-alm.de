import Card from "@/components/card/card";
import Grid from "@/components/grid/grid";
import LeafletMap from "@/components/map/leafletMap";
import Photo from '@/components/photo/photo';
import photos from '@/components/photos';
import getMetaData from '@/components/utils/getMetaData';
import VerticallyAlignedDiv from "@/components/utils/verticallyAlignedDiv";
import type { Metadata } from 'next';
import Nav from '../../components/nav/nav';
import KomootMap from "./komootMap";

const title = "Kratzeburg"
const description = "Radfahren, wandern und paddeln im Müritz-Nationalpark"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>
            <Photo props={photos.Kratzeburg__Kratzeburg_von_oben} priority={true}>
                <h1 className='color-cyan'>Kratzeburg</h1>
                <VerticallyAlignedDiv percentageOfViewWidth={43}>
                    <p className="color-cyan" style={{ marginLeft: '1vw', textAlign: 'center' }}>Havel Alm<br />↓</p>
                </VerticallyAlignedDiv>
            </Photo>
            <p>
                <a href="http://www.kratzeburg.de/">Kratzeburg</a> liegt inmitten der Mecklenburgischen Seen&shy;platte und ist der ideale Ausgangspunkt für <a href="http://www.kratzeburg.de/kultur-und-freizeitangebote/rad-wasser-und-wanderwege">Wanderun&shy;gen, Radtouren und Paddeltouren</a> durch den <a href="https://www.mueritz-nationalpark.de">Müritz-Nationalpark</a>.
            </p>
            <LeafletMap type='openTopoMap' lat={53.4352} lon={12.9467} height='80vh' />
            <p>Kratzeburg ist <a href="https://www.bahnhof.de/kratzeburg/ankunft">sehr gut per Bahn erreichbar</a>. Wir reisen selbst fast immer mit der Bahn aus Berlin an (wir haben kein eigen&shy;es Auto) und können das meistens empfehlen.</p>
            <p className="background-cyan">Vom Bahnhof zur Havel Alm sind es 700 Meter.</p>
            <Grid>
                <Photo props={photos.Kratzeburg__Bahnhof_Kratzeburg_1} />
                <Photo props={photos.Kratzeburg__Bahnhof_Kratzeburg_2} />

            </Grid>
            <Grid>
                <Card width={700} height={1000}>
                    <p>Auch 700 Meter von der Havel Alm entfernt liegt die <a href="https://maps.app.goo.gl/1WCvxehzFn4qvtKi8">Badestelle am <strong>Käbelicksee</strong></a>, einem der saubersten Seen in Mecklenburg-Vorpommern.</p>
                </Card>
                <Photo props={photos.Kratzeburg__Strand_am_Kaebelicksee} />
                <Photo props={photos.Kratzeburg__Badestelle_am_Kaebelicksee_im_Winter} />
                <Photo props={photos.Kratzeburg__Badestelle_am_Kaebelicksee_2} />
            </Grid>
            <Grid>
                <Card width={850} height={1000}>
                    <p>Weitere tolle Bade&shy;stellen gibt es am <a href="https://maps.app.goo.gl/i1eaAKU1xhMYVwrA9">Mühlensee</a> (ca. 6 km entfernt, an der Havel&shy;quelle) und am Röthsee im <a href="https://maps.app.goo.gl/WZew9ZV92FK2P7EB8">Familienferien&shy;park Dambeck</a> (ca. 3 km entfernt).</p>
                </Card>
                <Photo props={photos.Kratzeburg__Badestelle_am_Muehlensee__an_der_Havelquelle_} />
                <Photo props={photos.Kratzeburg__Badestrand_mit_Steg_am_Dambecker_See} />
                <Photo props={photos.Kratzeburg__Badestelle_beim_Familienferienpark_Dambeck} />
            </Grid>
            <Grid>
                <Card width={2000} height={1000}>
                    <p>Von Kratzeburg aus kann man durch traumhafte motorbootfreie Seen und kleine Kanäle die Havel entlang paddeln.</p>
                </Card>
                <Photo props={photos.Kratzeburg__Paddeln_auf_der_Havel_kurz_vor_Babke} />
            </Grid>
            <Grid>
                <Photo props={photos.Kratzeburg__Auf_der_Havel_bei_Granzin} />
                <Photo props={photos.Kratzeburg__Paddeln_auf_der_Havel} />
                <Photo props={photos.Kratzeburg__Boottransport_Kanu_Hecht} />
                <Card width={2100} height={1000} backgroundCyan={true}>
                    <p>Boote könnt ihr ausleihen bei <a href="https://maps.app.goo.gl/rPLZsK6edNstqsJw9">Kanu Hecht</a> (in Dalmsdorf, 1,2 km entfernt). Die holen euch nach Absprache auch mit den Booten von weiter havelabwärts wieder ab.</p>
                </Card>

            </Grid>
            <p>Radfahrer kommen in Kratzeburg voll auf ihre Kosten. </p>
            <p>Direkt vor dem Haus verläuft der <a href="https://www.bike-berlin-copenhagen.com/de/content/bike-berlin-copenhagen">Radfernweg Berlin-Kopenhagen</a>, der <a href="https://www.reiseland-brandenburg.de/aktivitaeten-erlebnisse/aktiv-natur/radfahren/radfernwege/havel-radweg/">Havel Radweg</a> sowie eine Menge lokaler Radwege.</p>

            <LeafletMap type="openCycleMap" lat={53.4352} lon={12.9467} height="80vh" />

            <p className="background-cyan">Wir empfehlen besonders Touren durch die unwirklich anmutenden Endmoränen nördlich von Kratzeburg:</p>
            <Grid>
                <Card width={1000} height={1200} keepAspectRatioOnMobile={true}>
                    <KomootMap tourId="1369883922" />
                </Card>
                <Card width={1000} height={1200} keepAspectRatioOnMobile={true}>
                    <KomootMap tourId="1369867633" />
                </Card>
            </Grid>
            <Grid>



                <Photo props={photos.Kratzeburg__Zwischen_Dambeck_und_Havelquelle} />
                <Photo props={photos.Kratzeburg__Weg_von_Dambeck_nach_Bornhof_2} />
                <Photo props={photos.Kratzeburg__Weg_von_Dambeck_nach_Bornhof_3} />
                <Photo props={photos.Kratzeburg__Weg_von_Dambeck_nach_Bornhof_1} />
                <Photo props={photos.Kratzeburg__Weg_nach_Dambeck} />

                <Photo props={photos.Kratzeburg__Radweg_zwischen_Liepen_und_Klein_Vielen_1} />
                <Photo props={photos.Kratzeburg__Radweg_zwischen_Liepen_und_Klein_Vielen_2} />
                <Photo props={photos.Kratzeburg__Zwischen_Liepen_und_Klein_Vielen} />


            </Grid>

            <Grid>
                <Card width={600} height={1000}>
                    <p>Rund um Kratzeburg kann man zudem auch wunderbar <strong>wandern</strong>.</p>
                    <p>Hier sind drei Empfehlungen für kürzere Runden direkt von der Havel Alm aus:</p>
                </Card>
                <Card width={1300} height={1000} keepAspectRatioOnMobile={true}>
                    <KomootMap tourId="1369563806" />
                </Card>
                <Card width={1000} height={1000}  keepAspectRatioOnMobile={true}>
                    <KomootMap tourId="1369641350" />
                </Card>
                <Card width={1000} height={1000} keepAspectRatioOnMobile={true}>
                    <KomootMap tourId="1369631263" />
                </Card>
            </Grid>
            <Grid>
                <Photo props={photos.Kratzeburg__Wanderweg_Richtung_Pieverstorf} />
                <Photo props={photos.Kratzeburg__Am_Dambecker_See} />
                <Photo props={photos.Kratzeburg__Hochsitz_am_Dambecker_See} />

                <Photo props={photos.Kratzeburg__Weg_zwischen_Pieverstorf_und_Kratzeburg} />
                <Photo props={photos.Kratzeburg__Weg_zwischen_Pieverstorf_und_Dambeck_2} />

                <Photo props={photos.Kratzeburg__Wanderweg_am_Granziner_See} />
                <Photo props={photos.Kratzeburg__Wiesen_zwischen_Havelquelle_und_Ankershagen} />
                <Photo props={photos.Kratzeburg__Kuehe_am_Granziner_See} />

                <Photo props={photos.Kratzeburg__Auf_dem_Schaeferberg__96m__zwischen_Pieverstorf_und_Hartwigsdorf} />

            </Grid>
            <Grid>
                <Card width={1400} height={1000}>
                    <p>Im Herbst sind die Wälder rund um Kratzeburg voller <strong>Pilze</strong>.</p>
                </Card>
                <Photo props={photos.Kratzeburg__Pilze_suchen_bei_Pieverstorf} />
                <Photo props={photos.Kratzeburg__Pilze} />


            </Grid>
            <Grid>
                <Card width={1200} height={1000}>
                    <p>Durch das Mikroklima der Müritz ist es in Kratzeburg im <strong>Winter</strong> kälter ist als in anderen Gegenden Mecklenburgs. </p>
                    <p>Die Seen frieren regelmässig zu und in den letzten Wintern konnte man immer einige Tage Langlaufski fahren.</p>
                </Card>
                <Photo props={photos.Kratzeburg__Langlauf_Ski_fahren_auf_dem_Kaebelicksee} />
            </Grid>
            <Grid>
                <Photo props={photos.Kratzeburg__Auf_dem_zugefrorenen_Kaebelicksee} />
                <Photo props={photos.Kratzeburg__Der_zugefrorene_Kaebelicksee} />

                <Photo props={photos.Kratzeburg__Kuehe_auf_der_Weide_in_Richtung_Pieverstorf_1} />

                <Photo props={photos.Kratzeburg__Kuehe_auf_der_Weide_in_Richtung_Pieverstorf_2} />
                <Photo props={photos.Kratzeburg__Radweg_in_Richtung_Pieverstorf} />
                <Photo props={photos.Kratzeburg__Der_Wald_hinter_dem_Haus} />
                <Photo props={photos.Kratzeburg__Am_Roethsee_zwischen_Dambeck_und_Kratzeburg} />
            </Grid>

            <Nav verticalOffsetInVWs={20} />
        </>
    )
}


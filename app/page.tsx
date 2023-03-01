import Picture from '../components/picture/picture'

import * as photos from '../components/photos'

import Grid from "../components/grid/grid"
import Card from "../components/card/card"


export default function Home() {
    return (
        <>
            <Picture photo={photos.house_views_Havel_Alm_Kratzeburg_aerial_view_1_jpg} priority={true}
                     className='color-cyan'>
                <div style={{top: '5vw'}}>
                    <h1>Havel Alm</h1>
                    <blockquote>68 meters above sea level</blockquote>
                    <blockquote>At the source of the Havel river</blockquote>
                    <blockquote>80 minutes by direct train from Berlin</blockquote>
                </div>
                <div style={{top: '90vw'}}>
                    <blockquote>Your holiday home for</blockquote>
                    <blockquote> - Vacations with bigger groups</blockquote>
                    <blockquote> - Family reunions</blockquote>
                    <blockquote> - Company off-sites and workshops</blockquote>
                </div>
                <div style={{top: '132vw'}}>
                    <h2>Currently under construction</h2>
                    <h2>Opening May 2023</h2>
                </div>

                <div style={{'top': '213vw'}}>
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
            </Picture>
            <Grid spacing={0}>
                <Picture photo={photos.house_views_House_view_from_street_winter_1_jpg} priority={true}>
                    <h2 style={{top: '2vw'}}>The House</h2>
                </Picture>
                <Picture photo={photos.house_views_View_from_street_February_2023_jpg}/>
                <Picture photo={photos.house_views_View_from_North_February_2023_jpg}/>
                {/*<Picture photo={photos.house_views_View_from_street_February_2023_jpg}/>*/}
                {/*<Picture photo={photos.house_views_View_from_North_February_2023_jpg}/>*/}
                {/*<Picture photo={photos.house_views_View_from_street_February_2023_jpg}/>*/}
                {/*<Card width={1000} height={1000}>*/}
                {/*    <h1>Hello World</h1>*/}
                {/*</Card>*/}
                {/*<Picture photo={photos.house_views_View_from_street_February_2023_jpg}/>*/}
                {/*<Picture photo={photos.house_views_View_from_North_February_2023_jpg}/>*/}
                {/*<Picture photo={photos.house_views_View_from_street_February_2023_jpg}/>*/}
            </Grid>

        </>
    )
}


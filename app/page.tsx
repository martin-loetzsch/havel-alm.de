import Picture from '../components/picture/picture'

import imageHavelAlm1 from '../public/photos/havel-alm-1.jpg'

export default function Home() {
    return (
        <>
            <Picture image={imageHavelAlm1} alt="Havel Alm Kratzeburg" priority={true} width={50}>
                <div style={{top: '5vw'}}>
                    <h1>Havel Alm</h1>
                    <blockquote>68 meters above sea level</blockquote>
                    <blockquote>At the source of the Havel river</blockquote>
                    <blockquote>80 minutes by direct train from Berlin</blockquote>
                </div>
                <div style={{top: '85vw'}}>
                    <blockquote>Your vacation home for</blockquote>
                    <blockquote> - Holidays with bigger groups</blockquote>
                    <blockquote> - Family reunions</blockquote>
                    <blockquote> - Company off-sites and workshops</blockquote>
                </div>
                <div style={{top: '129vw'}}>
                    <h2>Currently under construction</h2>
                    <h2>Opening May 2023</h2>
                </div>

                <div style={{'top': '210vw'}}>
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
            {/*<h2>The House</h2>*/}
        </>
    )
}

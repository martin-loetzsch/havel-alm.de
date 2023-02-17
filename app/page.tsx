import styles from './page.module.css'
import Picture from '../components/picture/picture'

import imageHavelAlm1 from '../public/photos/havel-alm-1.jpg'

export default function Home() {
    return (
        <main className={styles.main}>
            <Picture image={imageHavelAlm1} alt="Havel Alm Kratzeburg" priority={true} width={50}>
                <div style={{top: '8vw'}}>
                    <h1>Havel Alm</h1>
                    <h2>68 meters above sea level</h2>
                </div>
                <div style={{top: '95vw'}}>
                    <p>At the source of the Havel river</p>
                    <p>80 minutes by direct train from Berlin Gesundbrunnen</p>
                </div>

                <div style={{'top': '207vw'}}>
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

        </main>
    )
}

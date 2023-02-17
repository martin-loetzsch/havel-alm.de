import styles from './page.module.css'
import Picture from '../components/picture/picture'

import imageHavelAlm1 from '../public/photos/havel-alm-1.jpg'

export default function Home() {
    return (
        <main className={styles.main}>
            <Picture image={imageHavelAlm1} alt="Havel Alm Kratzeburg" priority={true} width={50}>
                <h1 style={{top: '8vw'}}>Havel Alm</h1>
                <h2 style={{top: '25vw'}}>68 meters above sea level</h2>
                <div style={{top: '95vw'}}>
                    <p>At the source of the Havel river</p>
                    <p>80 minutes by direct train from Berlin Gesundbrunnen</p>
                </div>

                <p style={{'top': '211vw'}}>
                    Havel Alm <a href="https://sabine-boettger.de">Sabine Boettger</a> und <a
                    href="https://martin-loetzsch.de">Martin Loetzsch</a> GbR<br/>
                    <a href="https://goo.gl/maps/AE6Nh2RedGxnfaSi9">Dorfstr. 2a, 17237 Kratzeburg</a><br/>
                    <a href="mailto:info@havel-alm.de">info@havel-alm.de</a><br/>
                    +49 178 6803711
                </p>
            </Picture>

        </main>
    )
}

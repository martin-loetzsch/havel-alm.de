import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <img title="Havel Alm Kratzeburg" alt="Havel Alm Kratzeburg" src="photos/havel-alm-1.jpg"
                 style={{width: '100%', position: 'absolute', zIndex: '-1'}}/>

            <div id="text">
                <h1 style={{paddingTop: '3vw'}}>Havel Alm</h1>
                <h2>68 meters above sea level</h2>

                <p style={{paddingTop: '67.5vw'}}>At the source of the Havel river</p>
                <p>80 minutes by direct train from Berlin Gesundbrunnen</p>

                <p style={{position: 'absolute', 'top': '211vw', maxWidth: '100%'}}>
                    Havel Alm <a href="https://sabine-boettger.de">Sabine Boettger</a> und <a href="https://martin-loetzsch.de">Martin Loetzsch</a> GbR<br/>
                    <a href="https://goo.gl/maps/AE6Nh2RedGxnfaSi9">Dorfstr. 2a, 17237 Kratzeburg</a><br/>
                    <a href="mailto:info@havel-alm.de">info@havel-alm.de</a><br/>
                    +49 178 6803711
                </p>
            </div>

        </main>
    )
}

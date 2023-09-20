import { ReactNode } from 'react'
import '../components/global-styles/main.scss'
import styles from './layout.module.scss'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.container}>
          {children}
          <footer className='background-cyan'>
            <p>Havel Alm <a href="https://sabine-boettger.de">Sabine Boettger</a> und <a
              href="https://martin-loetzsch.de">Martin Loetzsch</a> GbR
            </p>
            <p>
              <a href="https://goo.gl/maps/AE6Nh2RedGxnfaSi9">Dorfstr. 2a, 17237 Kratzeburg</a>
            </p>
            <p>
              <a href="mailto:info@havel-alm.de">info@havel-alm.de</a>
            </p>
            <p>
              <a href="tel:+49 178 6803711">+49 178 6803711</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}

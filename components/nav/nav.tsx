import styles from './nav.module.scss'
import Link from 'next/link'

import { FunctionComponent, ReactNode } from 'react'

const links = {
    '/': 'Start',
    '/innen': 'Innen',
    '/aussen': 'Aussen',
    '/umgebung': 'Umgebung',
    '/buchung': 'Buchung',
}

const Nav: FunctionComponent = (): JSX.Element => {
    return (
        <nav className={styles.container}>
            <ul>
                {
                    Object.keys(links).map((link, index) => (

                        <Link key={link} href={link}>{links[link]}</Link>
                    ))
                }
               
            </ul>
        </nav>
    )
}

export default Nav



'use client'

import styles from './nav.module.scss'
import Link from 'next/link'

import { FunctionComponent, useState } from 'react'

const links = {
    '/': 'Start',
    '/innen': 'Innen',
    '/aussen': 'Aussen',
    '/umgebung': 'Umgebung',
    '/buchung': 'Buchung',
}

const Nav: FunctionComponent = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.nav + ' ' + (isOpen ? styles.navOpened : styles.navClosed)}>
            <div className={`${styles.icon}  ${styles.iconOpen}`}
                onClick={() => { setIsOpen(true) }}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                    <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                    <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <div className={`${styles.icon} ${styles.iconClose}`}
            onClick={() => { setIsOpen(false) }}>
                X
            </div>
            {
                isOpen &&
                Object.keys(links).map((link, index) => (

                    <Link key={link} href={link}>{links[link]}</Link>
                ))}


        </nav>
    )
}

export default Nav



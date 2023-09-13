'use client'

import styles from './nav.module.scss'
import Link from 'next/link'

import { FunctionComponent, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import useWindowWidth from '../useWindowWidth'


interface Map {
    [key: string]: string
}


const defaultLinks: Map = {
    '/': 'Start',
    '/das-haus': 'Innen',
    '/der-garten': 'Aussen',
    '/umgebung': 'Umgebung',
    '/preise-und-buchung': 'Buchung',
}

type NavProps = {
    verticalOffsetInVWs?: number,
    customEntries?: { [url: string]: string }
}

const Nav: FunctionComponent<NavProps> = ({ verticalOffsetInVWs, customEntries }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0);

    const pathname = usePathname()

    const links = { ...customEntries, ...defaultLinks }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const windowWidth = useWindowWidth()

    if (!verticalOffsetInVWs || (windowWidth && scrollY >= verticalOffsetInVWs / 100.0 * windowWidth)) {
        return (
            <nav className={styles.nav + ' ' + (isOpen ? styles.navOpened : styles.navClosed)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
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
                        link != pathname ?
                            <Link key={link} href={{ pathname: link }}>{links[link]}</Link>
                            :
                            <p key={link}>{links[link]}</p>
                    ))}


            </nav>
        )
    }
}

export default Nav



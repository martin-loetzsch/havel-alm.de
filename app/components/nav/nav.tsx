'use client'

import Link from 'next/link'
import styles from './nav.module.scss'

import { usePathname } from 'next/navigation'
import { FunctionComponent, useEffect, useState } from 'react'
import useWindowWidth from '../../lib/useWindowWidth'


interface Map {
    [key: string]: string
}


const defaultLinks: Map = {
    '/': 'Start',
    '/das-haus': 'Innen',
    '/rund-um-das-haus': 'Aussen',
    '/preise-und-buchung': 'Buchung',
    '/kratzeburg': 'Kratzeburg',
    // '/making-of': 'Making-of',
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
                        <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
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
                            <Link key={link} href={{ pathname: link }} prefetch={false}>
                                {links[link]}
                            </Link>
                            :
                            <p key={link}>{links[link]}</p>
                    ))}


            </nav>
        )
    } else {
        return <></>
    }
}

export default Nav



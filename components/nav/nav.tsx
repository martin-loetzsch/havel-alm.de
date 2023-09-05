import styles from './nav.module.scss'
import Link from 'next/link'

import { FunctionComponent, ReactNode } from 'react'


const Nav: FunctionComponent = (): JSX.Element => {
    return (
        <nav className={styles.container}>
            <ul>
                <Link href='/'>Start</Link>
                <Link href='/das-haus'>Das Haus</Link>
                <Link href='/preise-und-Buchung'>Buchung und Preise</Link>
                
            </ul>
        </nav>
    )
}

export default Nav



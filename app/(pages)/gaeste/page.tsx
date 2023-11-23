import Nav from '@/components/nav/nav';
import getMetaData from '@/components/utils/getMetaData';
import type { Metadata } from 'next';

const title = "Gäste"
const description = "Informationen für euren Aufenthalt"

export const metadata: Metadata = getMetaData(title, description)


export default function Home() {
    return (
        <>
            <h1>Welcome!</h1>
            <p>Willkommen auf der Havel Alm</p>
            <Nav customEntries={{'/gaeste': 'Gaeste'}}/>
        </>
    )
}


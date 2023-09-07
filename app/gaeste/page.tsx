import getMetaData from '@/components/getMetaData';
import type { Metadata } from 'next';

const title = "Gäste"
const description = "Informationen für Ihren Aufenthalt"

export const metadata: Metadata = getMetaData(title, description)


export default function Home() {
    return (
        <>
            <h1>Willkommen auf der Havel Alm</h1>
        </>
    )
}


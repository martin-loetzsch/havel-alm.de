import Nav from '@/app/components/nav/nav';
import getMetaData from '@/app/lib/getMetaData';
import type { Metadata } from 'next';

const title = "Kaffeemaschine"
const description = "Bedienung der Kaffeemaschine"

export const metadata: Metadata = getMetaData(title, description)


export default function Home() {
    return (
        <>
            <h1>{title}</h1>
            <h3 className='background-cyan'>Diese Seite befindet sich noch im Aufbau.</h3>
            <p>Bei Fragen ruft uns bitte an.</p>
            <Nav customEntries={{'/gaeste': 'Gaeste'}}/>
        </>
    )
}


import { default as TextCard } from '@/components/card/textCard';
import Grid from "@/components/grid/grid";
import getMetaData from '@/components/utils/getMetaData';
import type { Metadata } from 'next';
import Nav from '../../components/nav/nav';

const title = "Making-of"
const description = "Über die Entstehung des Hauses"

export const metadata: Metadata = getMetaData(title, description)

export default function Home() {
    return (
        <>
            <h1 className='color-cyan'>Making of</h1>
            <TextCard width={3000} height={2000} backgroundCyan={true}>
                <p>Die Havel Alm wurde ca. 1900 als Stallgebäude am Ortseingang von Kratzeburg errichtet. 2021 übernahmen wir das bis dahin als Cafe genutzte Haus und bauten es bis Mai 2023 ökologisch zu einem Ferien- und Seminarhaus um.</p>
            </TextCard>

            <Nav verticalOffsetInVWs={10} />
        </>
    )
}


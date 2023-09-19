import type { Metadata } from 'next';

export default function getMetaData(title: string, description: string): Metadata  {
    return {
    title: title,
    description: description,
    authors: [{ name: 'Havel Alm', url: 'https://havel-alm.de' }],
    openGraph: {
        title: title,
        description: description,
        url: 'https://havel-alm.de/',
        siteName: 'havel-alm.de',
        locale: 'de-DE',
    },

    icons: {
        icon: '/favicon.ico',
    }
}
}

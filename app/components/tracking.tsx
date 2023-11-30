'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { FunctionComponent, useEffect } from 'react';

const Tracking: FunctionComponent = (): JSX.Element => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const parseUrl = (url: string) => {
        if (!url) {
            return {}
        } else {
            try {
                const parsedUrl = new URL(url);
                return {
                    hash: parsedUrl.hash,
                    host: parsedUrl.host,
                    pathname: parsedUrl.pathname,
                    searchParams: Object.fromEntries(parsedUrl.searchParams.entries()),
                }
            } catch (error) {
                console.warn('Error parsing URL ' + url)
                console.error(error)
                return {}
            }
        }
    }

    useEffect(() => {
        const event = {
            url: parseUrl(document.URL),
            referrer: parseUrl(document.referrer),

        }

        fetch('/x', { method: 'POST', body: JSON.stringify(event) })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }, [pathname]);


    return <></>
}

export default Tracking



'use client'

import { url } from 'inspector';
import { usePathname, useSearchParams } from 'next/navigation';
import { FunctionComponent, useEffect, useState } from 'react';
const sessionId = crypto.randomUUID()


const Tracking: FunctionComponent = (): JSX.Element => {
    const [hitCount, setHitCount] = useState(0)
    const pathname = usePathname()
    const searchParams = useSearchParams()


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
        const visitorId = localStorage.getItem('vid') || crypto.randomUUID()
        localStorage.setItem('vid', visitorId)

        const event = {
            visitorId: visitorId,
            sessionId: sessionId,
            hit: hitCount,
            url: parseUrl(document.URL),
            referrer: hitCount == 0 ? parseUrl(document.referrer) : {},
        }

        setHitCount(hitCount + 1)
        const url = '/x'

        if (navigator.sendBeacon) {
            navigator.sendBeacon(url, JSON.stringify(event))
        } else {
            fetch(url, { body: JSON.stringify(event), method: 'POST', keepalive: true })
        }
    }, [pathname, searchParams]);


    return <></>
}

export default Tracking



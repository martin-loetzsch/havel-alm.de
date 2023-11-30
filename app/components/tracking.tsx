'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { FunctionComponent, use, useEffect } from 'react';

const Tracking: FunctionComponent = (): JSX.Element => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
useSearchParams
    useEffect(() => {
        const event = {
            searchParams: Object.fromEntries(searchParams.entries()),
            pathname: pathname,
            referrer: document.referrer,

        }
        
        fetch('/x', {method: 'POST', body: JSON.stringify(event)})
        .then((response) => response.json())
        .then((data) => console.log(data))
    }, [pathname]);


    return <></>
}

export default Tracking



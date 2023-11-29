'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { FunctionComponent, use, useEffect } from 'react';

const Tracking: FunctionComponent = (): JSX.Element => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
useSearchParams
    useEffect(() => {
        const searchParamsDict = Object.fromEntries(searchParams.entries())
        const referrer = document.referrer
        console.log('Tracking', pathname, searchParamsDict, referrer)
    }, [pathname]);


    return <></>
}

export default Tracking



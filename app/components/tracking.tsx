'use client'


import { usePathname } from 'next/navigation';
import { FunctionComponent, useEffect } from 'react';


const Tracking: FunctionComponent = (): JSX.Element => {
    const pathname = usePathname();

    useEffect(() => {
        console.log('Tracking', pathname)
    }, [pathname]);


    return <></>
}

export default Tracking



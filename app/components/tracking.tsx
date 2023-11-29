'use client'

import Link from 'next/link'

import { FunctionComponent, useEffect, useState } from 'react'



const Tracking: FunctionComponent = (): JSX.Element => {

    useEffect(() => {
        console.log('Tracking')
    }, []);


    return <></>
}

export default Tracking



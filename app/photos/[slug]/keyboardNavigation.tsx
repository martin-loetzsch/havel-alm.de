'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";
import useWindowWidth from "@/components/useWindowWidth"

import * as React from "react";

type KeyboardNavigationProps = {
    linkOnLeftArrow?: string ,
    linkOnRightArrow?:string
}

export const KeyboardNavigation: React.FunctionComponent<KeyboardNavigationProps> = (
    {
        linkOnLeftArrow,
        linkOnRightArrow
    }): JSX.Element =>{

    const router = useRouter();
    const windowWidth = useWindowWidth()

    useEffect(() => {
        if (windowWidth) {
            window.scrollTo({top: Math.round(windowWidth * 0.22), behavior: 'smooth'})
        }
        const keyDownHandler = (e:KeyboardEvent):any => {
            if (e.code == 'ArrowRight' && linkOnRightArrow) {
                router.push(linkOnRightArrow);
            } else if (e.code == 'ArrowLeft' && linkOnLeftArrow) {
                router.push(linkOnLeftArrow);
            }

        }
        document.addEventListener("keydown", keyDownHandler);

        // clean up
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, [linkOnLeftArrow, linkOnRightArrow, router, windowWidth]);

    return <></>

}

export default KeyboardNavigation
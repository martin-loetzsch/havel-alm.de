'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";

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
    useEffect(() => {
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
    }, []);

    return <></>

}

export default KeyboardNavigation
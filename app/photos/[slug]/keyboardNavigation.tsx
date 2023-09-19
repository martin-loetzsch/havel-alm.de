'use client'

import {useRouter} from "next/navigation";
import {useEffect, FunctionComponent} from "react";
import useWindowWidth from "@/components/utils/useWindowWidth"


type KeyboardNavigationProps = {
    linkOnLeftArrow?: string ,
    linkOnRightArrow?:string
}

export const KeyboardNavigation: FunctionComponent<KeyboardNavigationProps> = (
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

        const navigateNext = () => {
            if (linkOnRightArrow) {
                console.log('navigateNext', linkOnRightArrow)
                router.push(linkOnRightArrow, {forceOptimisticNavigation:true})
            }
        }

        const navigatePrevious = () => {
            if (linkOnLeftArrow) {
                router.push(linkOnLeftArrow)
            }
        }

        const keyDownHandler = (e:KeyboardEvent):any => {
            if (e.code == 'ArrowRight') {
                navigateNext()
            } else if (e.code == 'ArrowLeft') {
                navigatePrevious()
            }

        }


        document.addEventListener("keydown", keyDownHandler)

        // clean up
        return () => {
            document.removeEventListener("keydown", keyDownHandler)
        };
    }, [linkOnLeftArrow, linkOnRightArrow, router, windowWidth]);

    return <></>

}

export default KeyboardNavigation
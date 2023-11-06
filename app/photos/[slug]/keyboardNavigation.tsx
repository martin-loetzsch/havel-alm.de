'use client'

import {useRouter} from "next/navigation";
import {useEffect, FunctionComponent} from "react";


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


    useEffect(() => {

        const navigateNext = () => {
            if (linkOnRightArrow) {
                //console.log('navigateNext', linkOnRightArrow)
                router.push(linkOnRightArrow)
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
    }, [linkOnLeftArrow, linkOnRightArrow, router]);

    return <></>

}

export default KeyboardNavigation
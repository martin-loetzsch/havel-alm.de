// route name "/x" is chosen over e.g. "/track" to avoid problems with ad blockers
import { NextRequest, NextResponse, userAgent } from "next/server"


export async function POST(request: NextRequest) {
    const cookies = Object.values(Object.fromEntries(request.cookies))
    const cookiesFlattened = Object.fromEntries(cookies.map((cookie: any) => [cookie.name, cookie.value]))
 //   console.log()
    const body = await request.json()
    const event = {
        pathname: body.pathname,
        searchParams: body.searchParams,
        referrer: body.referrer,
        headers: Object.fromEntries(await request.headers.entries()),
        cookies: cookiesFlattened,
        userAgent: userAgent(request),
    }
    return NextResponse.json(event)
}
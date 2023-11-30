// route name "/x" is chosen over e.g. "/track" to avoid problems with ad blockers
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
    console.log(request.geo)
    const event = {
        // headers: request.headers.get('headers'),
        ip: request.ip || null,
        geo: request.geo || null, 
        cookies: Object.fromEntries(request.cookies)
    }
    return NextResponse.json(event)
}
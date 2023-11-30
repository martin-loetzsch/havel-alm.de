// route name "/x" is chosen over e.g. "/track" to avoid problems with ad blockers
import { NextRequest, NextResponse, userAgent } from "next/server"


export async function POST(request: NextRequest) {
    console.log(userAgent(request))
    const event = {
        headers: Object.fromEntries(await request.headers.entries()),
        body: await request.json(),
        ip: request.ip || null,
        geo: request.geo || null, 
        cookies: Object.fromEntries(request.cookies),
        userAgent: userAgent(request),
    }
    return NextResponse.json(event)
}
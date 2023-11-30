// route name "/x" is chosen over e.g. "/track" to avoid problems with ad blockers
import { NextRequest, NextResponse, userAgent } from "next/server"


export async function POST(request: NextRequest) {
    const cookies = Object.values(Object.fromEntries(request.cookies))
    const cookiesFlattened = Object.fromEntries(cookies.map((cookie: any) => [cookie.name, cookie.value]))
 //   console.log()
    const body = await request.json()
    const event = {
        ...body,
        timestamp: new Date().toISOString(),
        // headers: Object.fromEntries(await request.headers.entries()),
        cookies: cookiesFlattened,
        userAgent: userAgent(request),
        geo: { 
            ip: request.headers.get('x-forwarded-for'),
            country: request.headers.get('x-vercel-ip-country'),
            region: request.headers.get('x-vercel-ip-country-region'),
            city: request.headers.get('x-vercel-ip-city'),
            latitude: request.headers.get('x-vercel-ip-latitude'),
            longitude: request.headers.get('x-vercel-ip-longitude'),
        }
    }
    console.log(event)
    return NextResponse.json('ok')
}
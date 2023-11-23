// route name "/x" is chosen over e.g. "/track" to avoid problems with ad blockers
import { NextRequest, NextResponse } from "next/server"


export const dynamic = 'force-dynamic' 

export async function POST(request: NextRequest) {
    return NextResponse.json('hello')
}
import { NextRequest, NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

export const POST = async (req: NextRequest) => {
    const utapi = new UTApi({apiKey: process.env.UPLOADTHING_SECRET})

    const filename = req.headers.get('x-vercel-filename') || 'file.png'
    const file = Object.assign(await req.blob(), { name: Math.random() + '-' + filename });
    const response = await utapi.uploadFiles(file)

    return NextResponse.json(response)
}
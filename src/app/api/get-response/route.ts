import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { query } = await req.json();

    try {
        const url = `https://serpapi.com/search.json`;

        const params = {
            q: query,
            hl: 'en',
            gl: 'us',
            google_domain: "google.com",
            api_key: process.env.NEXT_PUBLIC_SERPAPI_KEY
        }

        const res = await axios.get(url, {
            params
        });

        return NextResponse.json({
            success: true,
            data: res.data
        }, {status: 200});
    } catch (err) {
        console.log(err);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong'
        }, {status: 500});
    }
}
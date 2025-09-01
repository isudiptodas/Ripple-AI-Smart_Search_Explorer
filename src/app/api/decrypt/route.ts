import { NextRequest, NextResponse } from "next/server";
import CryptoJS from 'crypto-js';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { type } = body;

    if (type === "emoji") {
        const { message, key } = body;

        try {

            const bytes = CryptoJS.AES.decrypt(message, key as string);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);

            console.log(bytes);
            return NextResponse.json({
                success: true,
                message: "Message Decrypted",
                decrypted,
            }, { status: 200 });

        } catch (err) {
            console.log(err);
            return NextResponse.json({
                success: false,
                message: "Something went wrong",
            }, { status: 500 });
        }
    }
    else if (type === 'caesar') {
        const { message, key } = body;

        try {

            const bytes = CryptoJS.AES.decrypt(message, key as string);
            const decrypted = bytes.toString(CryptoJS.enc.Utf8);

            console.log(bytes);
            return NextResponse.json({
                success: true,
                message: "Message Decrypted",
                decrypted,
            }, { status: 200 });

        } catch (err) {
            console.log(err);
            return NextResponse.json({
                success: false,
                message: "Something went wrong",
            }, { status: 500 });
        }
    }
    else {
        return NextResponse.json({
            success: false,
            message: "Invalid Request",
        }, { status: 400 });
    }

}

import { NextRequest, NextResponse } from "next/server";
import CryptoJS from 'crypto-js';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { type } = body;

    if (type === "emoji") {
        const { message, key } = body;

        try {

            const final = CryptoJS.AES.encrypt(message, key as string).toString();

            return NextResponse.json({
                success: true,
                message: "Message Encrypted",
                encrypted: final,
            }, { status: 201 });

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

            const final = CryptoJS.AES.encrypt(message, key as string).toString();

            return NextResponse.json({
                success: true,
                message: "Message Encrypted",
                encrypted: final,
            }, { status: 201 });

        } catch (err) {
            console.log(err);
            return NextResponse.json({
                success: false,
                message: "Something went wrong",
            }, { status: 500 });
        }
    }
    else if (type === 'ascii') {
        const { message, key } = body;

        try {

            const final = CryptoJS.AES.encrypt(message, key as string).toString();

            return NextResponse.json({
                success: true,
                message: "Message Encrypted",
                encrypted: final,
            }, { status: 201 });

        } catch (err) {
            console.log(err);
            return NextResponse.json({
                success: false,
                message: "Something went wrong",
            }, { status: 500 });
        }
    }
    else if (type === 'phrase') {
        const { message, key } = body;

        try {

            const final = CryptoJS.AES.encrypt(message, key as string).toString();

            return NextResponse.json({
                success: true,
                message: "Message Encrypted",
                encrypted: final,
            }, { status: 201 });

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

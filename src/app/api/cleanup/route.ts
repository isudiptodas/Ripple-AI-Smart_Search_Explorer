import { deleteFiles } from "@/scripts/autoDelete";
import { NextResponse } from "next/server";

export async function GET() {
    await deleteFiles();
    return NextResponse.json({
        success: true,
        message: "Cleanup complete"
    });
}

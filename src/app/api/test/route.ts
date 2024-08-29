import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    return NextResponse.json([
        {
            id: 1,
            name: "John Doe"
        },
        {
            id: 2,
            name: "Jane Doe"
        },
        {
            id: 3,
            name: "John Smith"
        },
        {
            id: 4,
            name: "Jane Smith"
        },
        {
            id: 5,
            name: "John Johnson"
        },
        {
            id: 6,
            name: "Jane Johnson"
        },
        {
            id: 7,
            name: "John Brown"
        },
        {
            id: 8,
            name: "Jane Brown"
        },
        {
            id: 9,
            name: "John White"
        },
        {
            id: 10,
            name: "Jane White"
        }
    ], { status: 200, statusText: "OK" });
}
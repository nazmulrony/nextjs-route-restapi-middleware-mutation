import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ Message: 'Hello, Next.js!' });
}

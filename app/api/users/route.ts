import { getDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req : Request) {
    const db = await getDb();

    const body = await req.json();
    const name = body.name;
    const age = body.age;

    await db.query(
        `INSERT INTO users (name, age) VALUES ('${name}', ${age})`
    );

    return NextResponse.json({ ok: true });
}
import { getDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req : Request) {
    try {
        const db = await getDb();

        const body = await req.json();
        const name = body.name;
        const age = body.age;

        await db.query(
            `INSERT INTO users (name, age) VALUES ('${name}', ${age})`
        );

        return NextResponse.json({ ok: true });
    } catch (err : any) {
        return NextResponse.json(
            {
                ok: false,
                error: err.message,
                sqlMessage: err.sqlMessage,
                sql: err.sql,
            },
            { status: 500 }
        )
    }
}
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import clientPromise from '@/lib/mongodb';
import { User } from '@/types/user';

export async function POST(request: Request) {
  const { name, email, password, role } = await request.json();

  if (!name || !email || !password || !role) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const existingUser = await db.collection<User>('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 12);

    const result = await db.collection<User>('users').insertOne({
      name,
      email,
      password: hashedPassword,
      role: role as 'admin' | 'employee',
    });

    return NextResponse.json(
      { message: 'User created', userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

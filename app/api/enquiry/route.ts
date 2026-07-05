import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../prisma-client/client';

import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.first_name || !body.email || !body.property_goal) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        firstName: body.first_name,
        lastName: body.last_name || null,
        email: body.email,
        phone: body.phone || null,
        propertyGoal: body.property_goal,
        loanAmount: body.loan_amount || null,
        message: body.message || null,
        source: body.source || 'website'
      }
    });

    return NextResponse.json({ success: true, id: enquiry.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating enquiry:', error);
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}


import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // If no database connection, just log and return success (Mock Mode)
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL === 'postgres://placeholder') {
        console.log('Mock Lead Captured (No DB):', body);
        return NextResponse.json({ 
            success: true, 
            message: 'Lead captured (Mock Mode)',
            leadId: 'mock-id-' + Date.now()
        })
    }

    const { email, firstName, lastName, phone, company, message, source, interests } = body

    // Check if email already exists
    const existingLead = await prisma.lead.findUnique({
      where: { email }
    })

    let lead
    if (existingLead) {
      // Update existing lead
      lead = await prisma.lead.update({
        where: { email },
        data: {
          firstName: firstName || existingLead.firstName,
          lastName: lastName || existingLead.lastName,
          phone: phone || existingLead.phone,
          company: company || existingLead.company,
          message: message || existingLead.message,
          source: source || existingLead.source,
          interests: interests || existingLead.interests,
          updatedAt: new Date()
        }
      })
    } else {
      // Create new lead
      lead = await prisma.lead.create({
        data: {
          email,
          firstName,
          lastName,
          phone,
          company,
          message,
          source,
          interests,
          status: 'new'
        }
      })
    }

    console.log('Lead captured successfully:', lead.id)

    return NextResponse.json({ 
      success: true, 
      message: 'Lead captured successfully',
      leadId: lead.id 
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to capture lead' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Mock response if no DB
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL === 'postgres://placeholder') {
        return NextResponse.json({ success: true, leads: [] })
    }

    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10
    })
    
    return NextResponse.json({ success: true, leads })
  } catch (error) {
    console.error('Fetch leads error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

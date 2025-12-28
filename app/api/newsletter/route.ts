
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source } = body

    // Check if email already exists
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email }
    })

    if (existingSubscriber) {
      return NextResponse.json({ 
        success: true, 
        message: 'Already subscribed',
        subscriberId: existingSubscriber.id 
      })
    }

    // Create new newsletter subscription
    const subscriber = await prisma.newsletter.create({
      data: {
        email,
        source
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      subscriberId: subscriber.id 
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

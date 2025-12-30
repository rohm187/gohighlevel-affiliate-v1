// Safe stub replacement for any route that used to forward leads to ActiveCampaign.
// Replace existing file that forwarded leads to AC with this stub so forms still succeed.
// Note: This intentionally does NOT call external APIs. Use this as a placeholder.
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    // Log the payload server-side (Vercel logs) for debugging
    console.log('[AC-STUB] received lead payload:', payload);

    // Optionally persist the lead to Prisma here if you want:
    // import { prisma } from '@/lib/db'; await prisma.lead.create({ data: { ... } });

    // Return success to the client so forms don't fail
    return NextResponse.json({ ok: true, stub: true, message: 'ActiveCampaign forwarding removed' });
  } catch (err: any) {
    console.error('AC stub error', err);
    return NextResponse.json({ error: 'internal_error', detail: String(err) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

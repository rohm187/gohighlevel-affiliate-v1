// Upload endpoint stub: replace S3 upload handlers with this until you migrate to Google Cloud Storage.
// Returns 501 to indicate it's intentionally disabled until migration is done.
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // If you had file handling logic, keep it server-side and migrate to @google-cloud/storage.
  return NextResponse.json({ ok: false, message: 'File uploads are temporarily unavailable during system migration to Google Cloud Storage' }, { status: 501 });
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log('Midleware');
  return NextResponse.next();
}
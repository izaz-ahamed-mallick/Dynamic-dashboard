import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parse } from "cookie";

export function middleware(request: NextRequest) {
    const cookies = parse(request.headers.get("cookie") || "");
    const token = cookies.mockjwtToken;

    if (!token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/settings", "/profile"],
};

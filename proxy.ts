import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/seed") || pathname.startsWith("/query")) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { error: "Route not available in production" },
        { status: 403 },
      );
    }
  }

  const isOnDashboard = pathname.startsWith("/dashboard");
  const isLoggedIn = !!session?.user;

  if (isOnDashboard && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg)$).*)",
  ],
};

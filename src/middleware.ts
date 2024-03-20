
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth((req) => {
    // if (req.nextUrl.pathname.startsWith("/")) {
    // return NextResponse.redirect(new URL("/home/data-master", req.url))
    // }
    return
})




export const config = {
    matcher: ["/home/:path*"]
}

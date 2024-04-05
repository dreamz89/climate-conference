import { draftMode, cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get("secret")
  const slug = searchParams.get("slug")

  // Check the secret and next parameters
  if (secret !== process.env.STORYBLOK_ACCESS_TOKEN) {
    return new Response("Invalid token", { status: 401 })
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable()

  // Set cookie to None, so it can be read in the Storyblok iframe
  cookies()
    .getAll()
    .forEach((cookie) => {
      cookies().set(cookie.name, cookie.value, {
        sameSite: "none",
        secure: true,
      })
    })

  // Redirect to the path from the fetched post
  redirect(`/${slug}`)
}

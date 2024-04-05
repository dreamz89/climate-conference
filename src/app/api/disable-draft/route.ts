import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")

  draftMode().disable()

  // Redirect to the path from the fetched post
  redirect(`/${slug}`)
}

import { draftMode } from "next/headers"
import { getStoryblokApi } from "@storyblok/react/rsc"

export async function getStory(slug: string) {
  const storyblokApi = getStoryblokApi()

  if (!storyblokApi) return

  const { isEnabled } = draftMode()
  const version = process.env.NEXT_PUBLIC_STORYBLOK_VERSION

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: isEnabled || version === 'draft' ? "draft" : "published",
  })

  return data ? data.story : null
}

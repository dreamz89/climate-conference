import { draftMode } from "next/headers"
import { getStoryblokApi } from "@storyblok/react/rsc"

const storyblokApi = getStoryblokApi()

export async function getStory(slug: string) {
  if (!storyblokApi) return

  const isDraftEnabled = draftMode().isEnabled
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    resolve_links: "url",
  })

  return data ? data.story : null
}

export async function getLinks() {
  if (!storyblokApi) return

  const { data } = await storyblokApi.get("cdn/links", {
    version: "published",
  })

  return data ? data.links : null
}

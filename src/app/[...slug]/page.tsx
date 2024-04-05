import StoryblokStory from "@storyblok/react/story"
import { getLinks, getStory } from "@/utils/storyblok"

interface Paths {
  slug: string[]
}

export async function generateStaticParams() {
  const links = await getLinks()
  const paths: Paths[] = []

  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder || links[linkKey].slug === "home") {
      return
    }

    const slug = links[linkKey].slug
    let splittedSlug = slug.split("/")
    paths.push({ slug: splittedSlug })
  })

  return paths
}

async function fetchData(slug: string) {
  const story = await getStory(slug)

  return {
    story: story ?? false,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { story } = await fetchData(params.slug)

  return <StoryblokStory story={story} />
}

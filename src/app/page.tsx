import StoryblokStory from "@storyblok/react/story"
import { getStory } from "@/utils/storyblok"

async function fetchData() {
  const story = await getStory("home")

  return {
    story: story ?? false,
  }
}

export default async function Home() {
  const { story } = await fetchData()

  return <StoryblokStory story={story} />
}

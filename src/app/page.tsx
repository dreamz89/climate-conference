import StoryblokStory from "@storyblok/react/story"
import { getStory } from "@/utils/storyblok"

export default async function Home() {
  const story = await getStory("home")

  return <StoryblokStory story={story} />
}

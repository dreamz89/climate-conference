import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Speakers = ({ blok }: any) => {
  return (
    <div
      className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mb-14 lg:grid-cols-4 lg:gap-6"
      {...storyblokEditable(blok)}
    >
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Speakers

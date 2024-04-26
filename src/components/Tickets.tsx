import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Tickets = ({ blok }: any) => {
  return (
    <div
      className="flex flex-col flex-wrap items-center gap-6 sm:flex-row sm:items-start sm:justify-center"
      {...storyblokEditable(blok)}
    >
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default Tickets

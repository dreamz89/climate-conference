import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Partners = ({ blok }: any) => {
  return (
    <div
      className="rounded bg-gradient-to-r from-green-600 to-green-200 p-[1.5px]"
      {...storyblokEditable(blok)}
    >
      <div className="grid h-full w-full grid-cols-2 rounded-[3px] bg-white sm:grid-cols-3 lg:grid-cols-4">
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  )
}

export default Partners

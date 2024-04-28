import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const FooterBottom = ({ blok }: any) => {
  return (
    <div
      className="flex flex-col gap-6 py-6 text-sm text-white lg:flex-row lg:justify-between"
      {...storyblokEditable(blok)}
    >
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <p>{blok.copyright}</p>
    </div>
  )
}

export default FooterBottom

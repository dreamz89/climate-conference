import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const FooterLinks = ({ blok }: any) => {
  return (
    <div
      className="flex flex-col gap-4 text-sm text-white"
      {...storyblokEditable(blok)}
    >
      <b className="uppercase">{blok.category}</b>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default FooterLinks

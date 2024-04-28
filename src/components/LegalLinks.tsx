import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const LegalLinks = ({ blok }: any) => {
  return (
    <div className="flex gap-6" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default LegalLinks

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const SocialLinks = ({ blok }: any) => {
  return (
    <div className="flex gap-x-6 pt-6" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  )
}

export default SocialLinks

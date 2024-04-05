import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const HeroSection = ({ blok }: any) => {
  // console.log(blok)
  return (
    <section {...storyblokEditable(blok)}>
      <h1>{blok.headline}</h1>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  )
}

export default HeroSection

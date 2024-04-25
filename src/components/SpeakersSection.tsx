import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const SpeakersSection = ({ blok }: any) => {
  return (
    <section className="cc-section" {...storyblokEditable(blok)}>
      <div className="cc-container flex flex-col items-center">
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  )
}

export default SpeakersSection

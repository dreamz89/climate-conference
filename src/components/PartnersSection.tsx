import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const PartnersSection = ({ blok }: any) => {
  return (
    <section className="cc-section" {...storyblokEditable(blok)}>
      <div className="cc-container">
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  )
}

export default PartnersSection

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const TicketsSection = ({ blok }: any) => {
  return (
    <section className="cc-section" {...storyblokEditable(blok)}>
      <div className="cc-section-colored">
        <div className="cc-container">
          {blok.body.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TicketsSection
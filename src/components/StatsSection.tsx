import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const StatsSection = ({ blok }: any) => {
  return (
    <section className="cc-section" {...storyblokEditable(blok)}>
      <div className="cc-section-colored">
        <div className="cc-container grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          {blok.body.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

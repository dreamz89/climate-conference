import { useState } from "react"
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const ProgramSubpage = ({ blok }: any) => {
  const [isDay, setIsDay] = useState<string>("1")

  const programTabsBloks = blok.body.filter(
    (body: any) => body.component === "program_tab",
  )

  const talksBloks = blok.body.filter(
    (body: any) => body.component === "talk" && body.day === isDay,
  )

  const onSelect = (value: string) => setIsDay(value)

  return (
    <section className="cc-section-colored" {...storyblokEditable(blok)}>
      <div className="cc-container flex flex-col items-center">
        <div className="flex overflow-hidden rounded pb-12 ">
          {programTabsBloks.map((nestedBlok: any) => (
            <StoryblokComponent
              blok={nestedBlok}
              key={nestedBlok._uid}
              onSelect={onSelect}
              currentValue={isDay}
            />
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {talksBloks.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramSubpage

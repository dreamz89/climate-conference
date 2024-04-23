import Image from "next/image"
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const HeroSection = ({ blok }: any) => {
  return (
    <section className="cc-section" {...storyblokEditable(blok)}>
      <div className="cc-container flex max-w-md flex-col justify-between gap-8 lg:max-w-screen-xl lg:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="cc-h1 mb-1 lg:mb-3 lg:max-w-none">{blok.headline}</h1>
          <p className="mb-6 lg:mb-9">{blok.subheadline}</p>
          {blok.body.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
        <div className="pr-4 pt-5 lg:pr-8 lg:pt-9">
          <div className="relative aspect-[4/3] max-w-sm lg:w-[28rem] lg:max-w-none">
            <Image
              className="rounded"
              alt={blok.image.alt}
              src={blok.image.filename}
              fill
            />
            <div className="absolute z-[-1] h-full w-full -translate-y-3 translate-x-3 rotate-3 rounded bg-gradient-to-r from-green-600 to-green-200 lg:-translate-y-6 lg:translate-x-6"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

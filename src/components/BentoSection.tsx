import Image from "next/image"
import { storyblokEditable } from "@storyblok/react/rsc"

const BentoSection = ({ blok }: any) => {
  return (
    <section className="cc-section" {...storyblokEditable(blok)}>
      <div className="cc-container grid grid-cols-2 grid-rows-4 gap-4 md:grid-cols-4 md:grid-rows-2 lg:gap-6">
        <div className="relative col-start-1 col-end-3 row-start-1 row-end-2">
          <Image
            className="rounded object-cover"
            src={blok.image_2x1.filename}
            alt={blok.image_2x1.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 596px"
          />
        </div>
        <div className="relative col-start-1 col-end-2 row-start-3 row-end-5 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3">
          <Image
            className="rounded object-cover"
            src={blok.image_1x2.filename}
            alt={blok.image_1x2.alt}
            fill
            sizes="(max-width: 768px) 75vw, (max-width: 1280px) 50vw, 894px"
          />
        </div>
        <div className="relative col-start-2 col-end-3 row-start-4 row-end-5 aspect-square md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-3">
          <Image
            className="rounded object-cover"
            src={blok.image_1x1_a.filename}
            alt={blok.image_1x1_a.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 286px"
          />
        </div>
        <div className="relative col-start-2 col-end-3 row-start-2 row-end-3 aspect-square">
          <Image
            className="rounded object-cover"
            src={blok.image_1x1_b.filename}
            alt={blok.image_1x1_b.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 286px"
          />
        </div>
        <div className="aspect-square overflow-hidden rounded bg-green-400 p-6 md:max-lg:p-4">
          <p className="text-md text-white sm:max-md:text-lg lg:text-lg">
            {blok.cta_a}
          </p>
        </div>
        <div className="aspect-square overflow-hidden rounded bg-green-400 p-6 md:max-lg:p-4">
          <p className="text-md text-white sm:max-md:text-lg lg:text-lg">
            {blok.cta_b}
          </p>
        </div>
      </div>
    </section>
  )
}

export default BentoSection

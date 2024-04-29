import Image from "next/image"
import { storyblokEditable } from "@storyblok/react/rsc"

const Talk = ({ blok }: any) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded lg:flex-row"
      {...storyblokEditable(blok)}
    >
      <div className="bg-green-300 p-4 text-white lg:p-8">
        <b className="text-nowrap text-xl lg:text-2xl">{blok.timing}</b>
        <p className="text-sm lg:text-base">{blok.location}</p>
      </div>
      <div className="bg-white p-4 lg:p-8">
        <div className="mb-4 flex gap-x-4">
          <div className="relative h-11 w-11">
            <Image
              className="rounded object-cover"
              src={blok.speaker_image.filename}
              alt={blok.speaker_image.alt}
              fill
              sizes="44px"
            />
          </div>
          <div>
            <b>{blok.speaker_name}</b>
            <p className="text-sm">{blok.speaker_detail}</p>
          </div>
        </div>
        <b className="text-xl">{blok.title}</b>
        <p>{blok.description}</p>
      </div>
    </div>
  )
}

export default Talk

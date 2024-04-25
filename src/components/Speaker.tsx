import Image from "next/image"
import { storyblokEditable } from "@storyblok/react/rsc"

const Speaker = ({ blok }: any) => {
  return (
    <div className="relative text-center" {...storyblokEditable(blok)}>
      <div className="relative p-2 sm:p-3">
        <div className="cc-triangle-top-left absolute left-0 top-0 aspect-square h-[55%] rounded bg-green-500 odd:bg-green-300"></div>
        <div className="cc-triangle-bottom-right absolute bottom-0 right-0 aspect-square h-[55%] rounded bg-green-500 odd:bg-green-300"></div>
        <div className="relative aspect-square">
          <Image
            className="rounded object-cover"
            src={blok.photo.filename}
            alt={blok.photo.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 262px"
          />
        </div>
      </div>
      <b className="mb-1 mt-2 block text-base lg:text-xl">{blok.name}</b>
      <p className="text-sm lg:text-base">{blok.detail}</p>
    </div>
  )
}

export default Speaker

import Image from "next/image"
import { storyblokEditable } from "@storyblok/react/rsc"

const Partner = ({ blok }: any) => {
  const url = blok.link.url

  return (
    <div className="flex justify-center p-6">
      <a
        href={url.startsWith("http") ? url : `https://${url}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="relative block h-20 w-full lg:h-20 lg:w-24"
        {...storyblokEditable(blok)}
      >
        <Image src={blok.image.filename} alt={blok.image.alt} fill />
      </a>
    </div>
  )
}

export default Partner

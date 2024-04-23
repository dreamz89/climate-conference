import Image from "next/image"
import Link from "next/link"
import { storyblokEditable } from "@storyblok/react/rsc"

const ImageLink = ({ blok }: any) => {
  return (
    <Link
      href={blok.link.story ? blok.link.story.url : ""}
      className="relative block h-14 w-20 lg:h-20 lg:w-24"
      {...storyblokEditable(blok)}
    >
      <Image src={blok.image.filename} alt={blok.image.alt} fill />
    </Link>
  )
}

export default ImageLink

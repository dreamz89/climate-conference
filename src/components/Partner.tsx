import Image from "next/image"
import Link from "next/link"
import { storyblokEditable } from "@storyblok/react/rsc"

const Partner = ({ blok }: any) => {
  return (
    <div className="flex justify-center p-6">
      <Link
        href={blok.link?.url ?? ""}
        className="relative block h-20 w-full lg:h-20 lg:w-24 "
        {...storyblokEditable(blok)}
      >
        <Image src={blok.image.filename} alt={blok.image.alt} fill />
      </Link>
    </div>
  )
}

export default Partner

import Link from "next/link"
import { storyblokEditable } from "@storyblok/react/rsc"

const TextLink = ({ blok }: any) => {
  return (
    <Link
      className="hover:text-green-300"
      href={blok.link.story ? blok.link.story.url : ""}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </Link>
  )
}

export default TextLink

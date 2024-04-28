import Link from "next/link"
import { storyblokEditable } from "@storyblok/react/rsc"
import Icon from "./icons/Icon"
import Instagram from "./icons/Instagram"
import Facebook from "./icons/Facebook"
import Youtube from "./icons/Youtube"

const SocialLink = ({ blok }: any) => {
  const icon = () => {
    switch (blok.icon) {
      case "instagram": {
        return <Instagram />
      }
      case "facebook": {
        return <Facebook />
      }
      case "youtube": {
        return <Youtube />
      }
    }
  }

  return (
    <Link
      href={blok.link.story ? blok.link.story.url : ""}
      {...storyblokEditable(blok)}
    >
      <Icon stroke="white">{icon()}</Icon>
    </Link>
  )
}

export default SocialLink

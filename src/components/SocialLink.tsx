import { storyblokEditable } from "@storyblok/react/rsc"
import Icon from "./icons/Icon"
import Instagram from "./icons/Instagram"
import Facebook from "./icons/Facebook"
import Youtube from "./icons/Youtube"

const SocialLink = ({ blok }: any) => {
  const url = blok.link.url

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
    <a
      href={url.startsWith("http") ? url : `https://${url}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...storyblokEditable(blok)}
    >
      <Icon stroke="white">{icon()}</Icon>
    </a>
  )
}

export default SocialLink

import { storyblokEditable } from "@storyblok/react/rsc"

const Button = ({ blok }: any) => {
  // console.log(blok)
  if (blok.link.url) {
    return <a {...storyblokEditable(blok)}>{blok.label}</a>
  } else {
    return <button {...storyblokEditable(blok)}>{blok.label}</button>
  }
}

export default Button

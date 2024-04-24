import { storyblokEditable } from "@storyblok/react/rsc"

const Button = ({ blok }: any) => {
  if (blok.link.url) {
    return (
      <a
        className="flex w-40 justify-center rounded bg-yellow-400 py-3 leading-4 hover:bg-yellow-500"
        href={blok.link.url}
        target="_blank"
        {...storyblokEditable(blok)}
      >
        {blok.label}
      </a>
    )
  } else {
    return <button {...storyblokEditable(blok)}>{blok.label}</button>
  }
}

export default Button

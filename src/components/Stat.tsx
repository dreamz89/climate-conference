import { storyblokEditable } from "@storyblok/react/rsc"

const Stat = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      <b className="block text-[1.75rem] lg:mb-1 lg:text-4xl">{blok.number}</b>
      <p className="text-sm lg:text-[1.25rem]">{blok.label}</p>
    </div>
  )
}

export default Stat

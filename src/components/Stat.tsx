import { storyblokEditable } from "@storyblok/react/rsc"

const Stat = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)}>
      <b className="text-[2rem] lg:text-[3rem]">{blok.number}</b>
      <p className="text-sm lg:text-[1.25rem]">{blok.label}</p>
    </div>
  )
}

export default Stat

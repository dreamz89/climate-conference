import { storyblokEditable } from "@storyblok/react/rsc"

const SectionHeader = ({ blok }: any) => {
  return (
    <div
      className="flex flex-col items-center text-center"
      {...storyblokEditable(blok)}
    >
      <h2 className="cc-h2 mb-2">{blok.title}</h2>
      <p className="mb-8 max-w-prose text-base lg:mb-12 lg:text-lg">
        {blok.description}
      </p>
    </div>
  )
}

export default SectionHeader

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Ticket = ({ blok }: any) => {
  return (
    <div
      className="max-w-64 w-full overflow-hidden rounded"
      {...storyblokEditable(blok)}
    >
      <div className="bg-green-400 px-8 py-5 text-white">
        <p className="text-sm uppercase">{blok.type}</p>
        <b className="text-[1.75rem]">${blok.price}</b>
      </div>
      <div className="relative flex flex-col items-center bg-white p-8">
        {blok.note && (
          <p className="absolute bottom-[5.25rem] text-sm">*{blok.note}</p>
        )}
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  )
}

export default Ticket

import { storyblokEditable } from "@storyblok/react/rsc"

const ProgramTab = ({ blok, onSelect, currentValue }: any) => {
  return (
    <div
      className={`w-fit cursor-pointer p-2 text-center first:rounded-l last:rounded-r lg:px-8 lg:py-4 ${currentValue === blok.value ? "bg-yellow-300" : "bg-white"}`}
      onClick={() => onSelect(blok.value)}
      {...storyblokEditable(blok)}
    >
      <b className="lg:text-xl">{blok.day}</b>
      <p className="text-sm">{blok.date}</p>
    </div>
  )
}

export default ProgramTab

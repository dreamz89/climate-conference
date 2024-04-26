import { storyblokEditable } from "@storyblok/react/rsc"
import Icon from "./icons/Icon"
import Tick from "./icons/Tick"

const Benefits = ({ blok }: any) => {
  const { component, _editable, _uid, ...list } = blok
  const benefits = Object.values(list).filter(Boolean) as string[]

  return (
    <ul className="mb-14 flex flex-col gap-y-4" {...storyblokEditable(blok)}>
      {benefits.map((benefit: string) => {
        return (
          <li className="flex gap-x-2" key={benefit}>
            <Icon fill="#1F7B6B">
              <Tick />
            </Icon>
            {benefit}
          </li>
        )
      })}
    </ul>
  )
}

export default Benefits

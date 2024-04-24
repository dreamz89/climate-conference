"use client"

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"
import { useScrollTop } from "@/hooks/useScrollTop"

const Navigation = ({ blok }: any) => {
  const isTop = useScrollTop()

  return (
    <nav
      className={`sticky top-0 z-[99] w-full bg-white ${isTop ? "" : "shadow-md"}`}
      {...storyblokEditable(blok)}
    >
      <div className="cc-container flex h-14 items-center justify-between lg:h-20">
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </nav>
  )
}

export default Navigation

"use client"

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Navigation = ({ blok }: any) => {
  return (
    <nav className="sticky top-0 w-full bg-white" {...storyblokEditable(blok)}>
      <div className="cc-container flex h-14 items-center justify-between xl:h-20">
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </nav>
  )
}

export default Navigation

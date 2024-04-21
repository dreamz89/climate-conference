import { useState, useCallback, useEffect, useRef } from "react"
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"
import Burger from "./icons/Burger"
import Cross from "./icons/Cross"
import Icon from "./icons/Icon"

const NavLinks = ({ blok }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const menuRef = useRef<HTMLDivElement>(null)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const onClickOutside = useCallback((event: any) => {
    if (!menuRef.current?.contains(event.target as HTMLDivElement) && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen])

  useEffect(() => {
    document.addEventListener("click", onClickOutside)

    return () => {
      document.removeEventListener("click", onClickOutside)
    }
  }, [onClickOutside])

  return (
    <div {...storyblokEditable(blok)}>
      <div className="xl:hidden">
        <div className="cursor-pointer" onClick={toggleMenu}>
          <Icon>
            <Burger />
          </Icon>
        </div>
        <div
          className={`h-dvh min-w-40 border-gray.200 absolute right-0 top-0 border-l-[0.5px] bg-white transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          ref={menuRef}
        >
          <div
            className="flex h-14 cursor-pointer items-center justify-end px-4 xl:px-8"
            onClick={toggleMenu}
          >
            <Icon>
              <Cross />
            </Icon>
          </div>
          {blok.body.map((nestedBlok: any) => (
            <div
              className="px-4 py-3"
              key={nestedBlok._uid}
              onClick={toggleMenu}
            >
              <StoryblokComponent blok={nestedBlok} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden gap-x-10 xl:flex">
        {blok.body.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  )
}

export default NavLinks

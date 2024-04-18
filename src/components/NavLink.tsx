import Link from "next/link"
import { usePathname } from "next/navigation"
import { storyblokEditable } from "@storyblok/react/rsc"

const NavLink = ({ blok }: any) => {
  const pathname = usePathname()
  const url =
    blok.link.story?.full_slug === "home" ? "/" : `/${blok.link.story?.full_slug}`

  return (
    <Link
      className={`hover:text-green-400 ${url === pathname ? "text-green-400 underline decoration-2 underline-offset-8" : ""}`}
      href={url}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </Link>
  )
}

export default NavLink

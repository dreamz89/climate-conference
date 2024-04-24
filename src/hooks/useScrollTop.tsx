import { useEffect, useState } from "react"

export const useScrollTop = () => {
  const [isTop, setIsTop] = useState<boolean>(true)

  useEffect(() => {
    const checkIsTop = () => {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }

    window.addEventListener("scroll", checkIsTop)
    return () => window.removeEventListener("scroll", checkIsTop)
  }, [])

  return isTop
}

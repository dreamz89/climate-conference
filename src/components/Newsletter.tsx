import { useState, useRef } from "react"
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Newsletter = ({ blok }: any) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submit", inputRef.current?.value)
    if (inputRef.current?.value) setIsSubmitted(true)
  }

  const buttonBlok = blok.body.find((body: any) => body.component === "button")

  return (
    <div {...storyblokEditable(blok)}>
      <p className="pb-4 text-sm text-white">{blok.copy}</p>
      {isSubmitted ? (
        <p className="h-10 w-[336px] leading-10 text-green-200 lg:w-[368px]">
          {blok.success_message}
        </p>
      ) : (
        <form
          className="flex w-fit overflow-hidden rounded [&>button]:w-32 [&>button]:rounded-l-none"
          onSubmit={handleSubmit}
        >
          <input
            className="w-52 px-2 text-black lg:w-60"
            type="email"
            placeholder={blok.placeholder}
            ref={inputRef}
          />
          <StoryblokComponent blok={buttonBlok} key={buttonBlok._uid} />
        </form>
      )}
    </div>
  )
}

export default Newsletter

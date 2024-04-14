import { storyblokEditable } from "@storyblok/react/rsc"

const PageHeader = ({ blok }: any) => {
  return (
    <section className="py-20 xl:py-40" {...storyblokEditable(blok)}>
      <div className="cc-container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="cc-h1 mb-1 xl:mb-2">{blok.headline}</h1>
          <p className="cc-copy-md">{blok.description}</p>
        </div>
      </div>
    </section>
  )
}

export default PageHeader

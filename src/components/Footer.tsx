"use client"

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc"

const Footer = ({ blok }: any) => {
  const newsletterBlok = blok.body.find(
    (body: any) => body.component === "newsletter",
  )
  const socialLinksBlok = blok.body.find(
    (body: any) => body.component === "social_links",
  )
  const footerLinksBloks = blok.body.filter(
    (body: any) => body.component === "footer_links",
  )
  const footerBottomBlok = blok.body.find(
    (body: any) => body.component === "footer_bottom",
  )

  return (
    <footer className="bg-black" {...storyblokEditable(blok)}>
      <div className="cc-container flex flex-col">
        <div className="flex flex-col gap-x-20 gap-y-6 py-6 lg:flex-row">
          <div>
            <StoryblokComponent
              blok={newsletterBlok}
              key={newsletterBlok._uid}
            />
            <StoryblokComponent
              blok={socialLinksBlok}
              key={socialLinksBlok._uid}
            />
          </div>
          <div className="flex gap-x-12">
            {footerLinksBloks.map((footerLinksBlok: any) => (
              <StoryblokComponent
                blok={footerLinksBlok}
                key={footerLinksBlok._uid}
              />
            ))}
          </div>
        </div>
        <hr />
        <StoryblokComponent
          blok={footerBottomBlok}
          key={footerBottomBlok._uid}
        />
      </div>
    </footer>
  )
}

export default Footer

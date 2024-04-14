"use client"

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import Button from "./Button"
import HeroSection from "./HeroSection"
import PageHeader from "./PageHeader"
import Page from "./Page"
 
const components = {
  button: Button,
  hero_section: HeroSection,
  page_header: PageHeader,
  page: Page,
}
 
storyblokInit({
  accessToken: process.env.storyblokAccessToken,
  bridge: process.env.nodeEnv !== "production",
  use: [apiPlugin],
  components,
})
 
export default function StoryblokProvider({ children }: any) {
  return children
}

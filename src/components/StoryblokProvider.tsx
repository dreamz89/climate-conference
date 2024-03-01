"use client"

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import Button from "./Button"
import HeroSection from "./HeroSection"
import Page from "./Page"
 
const components = {
  button: Button,
  hero_section: HeroSection,
  page: Page,
}
 
storyblokInit({
  accessToken: process.env.storyblokDraftToken,
  use: [apiPlugin],
  components,
});
 
export default function StoryblokProvider({ children }: any) {
  return children
}
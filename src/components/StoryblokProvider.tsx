"use client"

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import BentoSection from "./BentoSection"
import Button from "./Button"
import HeroSection from "./HeroSection"
import ImageLink from "./ImageLink"
import Navigation from "./Navigation"
import NavLink from "./NavLink"
import NavLinks from "./NavLinks"
import PageHeader from "./PageHeader"
import SectionHeader from "./SectionHeader"
import Page from "./Page"
import Speaker from "./Speaker"
import Speakers from "./Speakers"
import SpeakersSection from "./SpeakersSection"
import Stat from "./Stat"
import StatsSection from "./StatsSection"

const components = {
  navigation: Navigation,
  nav_link: NavLink,
  nav_links: NavLinks,
  image_link: ImageLink,
  hero_section: HeroSection,
  bento_section: BentoSection,
  stats_section: StatsSection,
  speakers_section: SpeakersSection,
  section_header: SectionHeader,
  page_header: PageHeader,
  page: Page,
  button: Button,
  stat: Stat,
  speaker: Speaker,
  speakers: Speakers,
}

storyblokInit({
  accessToken: process.env.storyblokAccessToken,
  bridge: process.env.nodeEnv !== "production",
  use: [apiPlugin],
  apiOptions: {
    cache: { type: 'memory' },
  },
  components,
})

export default function StoryblokProvider({ children }: any) {
  return children
}

"use client"

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import Benefits from "./Benefits"
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
import Ticket from "./Ticket"
import Tickets from "./Tickets"
import TicketsSection from "./TicketsSection"

const components = {
  navigation: Navigation,
  nav_link: NavLink,
  nav_links: NavLinks,
  image_link: ImageLink,
  hero_section: HeroSection,
  bento_section: BentoSection,
  stats_section: StatsSection,
  speakers_section: SpeakersSection,
  tickets_section: TicketsSection,
  section_header: SectionHeader,
  page_header: PageHeader,
  page: Page,
  button: Button,
  stat: Stat,
  speaker: Speaker,
  speakers: Speakers,
  benefits: Benefits,
  ticket: Ticket,
  tickets: Tickets,
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

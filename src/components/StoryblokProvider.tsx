"use client"

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc"
import Benefits from "./Benefits"
import BentoSection from "./BentoSection"
import Button from "./Button"
import Footer from "./Footer"
import FooterBottom from "./FooterBottom"
import FooterLinks from "./FooterLinks"
import HeroSection from "./HeroSection"
import ImageLink from "./ImageLink"
import LegalLinks from "./LegalLinks"
import Navigation from "./Navigation"
import NavLink from "./NavLink"
import NavLinks from "./NavLinks"
import Newsletter from "./Newsletter"
import PageHeader from "./PageHeader"
import Page from "./Page"
import Partner from "./Partner"
import Partners from "./Partners"
import PartnersSection from "./PartnersSection"
import ProgramSubpage from "./ProgramSubpage"
import ProgramTab from "./ProgramTab"
import SectionHeader from "./SectionHeader"
import SocialLink from "./SocialLink"
import SocialLinks from "./SocialLinks"
import Speaker from "./Speaker"
import Speakers from "./Speakers"
import SpeakersSection from "./SpeakersSection"
import Stat from "./Stat"
import StatsSection from "./StatsSection"
import Talk from "./Talk"
import TextLink from "./TextLink"
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
  partners_section: PartnersSection,
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
  partner: Partner,
  partners: Partners,
  footer: Footer,
  footer_bottom: FooterBottom,
  footer_links: FooterLinks,
  legal_links: LegalLinks,
  social_link: SocialLink,
  social_links: SocialLinks,
  newsletter: Newsletter,
  text_link: TextLink,
  program_subpage: ProgramSubpage,
  program_tab: ProgramTab,
  talk: Talk,
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

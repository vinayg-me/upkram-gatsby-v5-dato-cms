import { HeroProps } from "./hero"
import { FeatureListProps } from "./feature-list"
import { LogoListProps } from "./logo-list"
import { BenefitListProps } from "./benefit-list"
import { TestimonialListProps } from "./testimonial-list"
import { StatListProps } from "./stat-list"
import { CtaProps } from "./cta"
import { ProductListProps } from "./product-list"

import { AboutHeroProps } from "./about-hero"
import { AboutStatListProps } from "./about-stat-list"
import { AboutLeadershipProps } from "./about-leadership"
import { AboutLogoListProps } from "./about-logo-list"
import { HomepageIntroProps } from "./homepage-intro"
import { HomepageFocusAreaProps } from "./focus-area"
import { HomepageOurWorkProps } from "./our-work"

export { default as HomepageHero } from "./hero"
export { default as HomepageFeatureList } from "./feature-list"
export { default as HomepageLogoList } from "./logo-list"
export { default as HomepageBenefitList } from "./benefit-list"
export { default as HomepageTestimonialList } from "./testimonial-list"
export { default as HomepageStatList } from "./stat-list"
export { default as HomepageCta } from "./cta"
export { default as HomepageProductList } from "./product-list"
export { default as HomepageIntro } from "./homepage-intro"
export { default as HomepageOurFocusArea } from "./focus-area"
export { default as HomepageOurWork } from "./our-work"
export { default as AboutHero } from "./about-hero"
export { default as AboutStatList } from "./about-stat-list"
export { default as AboutLeadership } from "./about-leadership"
export { default as AboutLogoList } from "./about-logo-list"

export type SectionProps =
  | HeroProps
  | FeatureListProps
  | LogoListProps
  | BenefitListProps
  | TestimonialListProps
  | StatListProps
  | CtaProps
  | ProductListProps
  | AboutHeroProps
  | AboutStatListProps
  | AboutLeadershipProps
  | AboutLogoListProps
  | HomepageIntroProps
  | HomepageFocusAreaProps
  | HomepageOurWorkProps

type Blocktypes =
  | "HomepageHero"
  | "HomepageFeatureList"
  | "HomepageLogoList"
  | "HomepageBenefitList"
  | "HomepageTestimonialList"
  | "HomepageStatList"
  | "HomepageCta"
  | "HomepageProductList"
  | "HomepageIntro"
  | "HomepageOurFocusArea"
  | "HomepageOurWork"
  | "AboutHero"
  | "AboutStatList"
  | "AboutLeadership"
  | "AboutLogoList"

type WithBlocktype<B = Blocktypes, P = SectionProps> = {
  id: string
  blocktype: B
} & P

export type HomepageBlock =
  | WithBlocktype<"HomepageHero", HeroProps>
  | WithBlocktype<"HomepageFeatureList", FeatureListProps>
  | WithBlocktype<"HomepageLogoList", LogoListProps>
  | WithBlocktype<"HomepageBenefitList", BenefitListProps>
  | WithBlocktype<"HomepageTestimonialList", TestimonialListProps>
  | WithBlocktype<"HomepageStatList", StatListProps>
  | WithBlocktype<"HomepageCta", CtaProps>
  | WithBlocktype<"HomepageProductList", ProductListProps>
  | WithBlocktype<"HomepageIntro", HomepageIntroProps>
  | WithBlocktype<"HomepageOurFocusArea", HomepageFocusAreaProps>
  | WithBlocktype<"HomepageOurWork", HomepageOurWorkProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutStatList", AboutStatListProps>
  | WithBlocktype<"AboutLeadership", AboutLeadershipProps>
  | WithBlocktype<"AboutLogoList", AboutLogoListProps>

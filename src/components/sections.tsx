import { HeroProps } from "./hero"
import { FeatureListProps } from "./feature-list"
import { LogoListProps } from "./logo-list"
import { BenefitListProps } from "./benefit-list"
import { TestimonialListProps } from "./testimonial-list"
import { StatListProps } from "./stat-list"
import { CtaProps } from "./cta"
import { ProductListProps } from "./product-list"

import { AboutHeroProps } from "./about-hero"
import { HomepageIntroProps } from "./homepage-intro"
import { HomepageFocusAreaProps } from "./focus-area"
import { HomepageOurWorkProps } from "./our-work"
import { HomepageOurProgramProps } from "./our-program-home"
import { AboutIntroProps } from "./about-intro"
import { AboutMotoBlockProps } from "./about-moto-block"
import { AboutUsObjectiveProps } from "./about-our-objectives"
import { AboutUsAdvisoryCouncilProps } from "./about-advisory-council"
import { AboutUsOurTeamProps } from "./about-our-team"
import { AboutUsOurVolunteerProps } from "./about-our-volunteers"

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
export { default as AboutUsIntro } from "./about-intro"
export { default as AboutTheMoto } from "./about-moto-block"
export { default as AboutUsObjective } from "./about-our-objectives"
export { default as AboutUsAdvisoryCouncil } from "./about-advisory-council"
export { default as AboutUsOurTeam } from "./about-our-team"
export { default as AboutUsOurVolunteer } from "./about-our-volunteers"
export { default as HomepageOurProgram } from "./our-program-home"

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
  | AboutIntroProps
  | AboutMotoBlockProps
  | AboutUsObjectiveProps
  | AboutUsAdvisoryCouncilProps
  | AboutUsOurTeamProps
  | AboutUsOurVolunteerProps
  | HomepageIntroProps
  | HomepageFocusAreaProps
  | HomepageOurWorkProps
  | HomepageOurProgramProps

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
  | "HomepageOurProgram"
  | "HomepageOurWork"
  | "AboutHero"
  | "AboutUsIntro"
  | "AboutTheMoto"
  | "AboutUsObjective"
  | "AboutUsAdvisoryCouncil"
  | "AboutUsOurTeam"
  | "AboutUsOurVolunteer"

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
  | WithBlocktype<"HomepageOurProgram", HomepageOurProgramProps>
  | WithBlocktype<"AboutHero", AboutHeroProps>
  | WithBlocktype<"AboutUsIntro", AboutIntroProps>
  | WithBlocktype<"AboutTheMoto", AboutMotoBlockProps>
  | WithBlocktype<"AboutUsObjective", AboutUsObjectiveProps>
  | WithBlocktype<"AboutUsAdvisoryCouncil", AboutUsAdvisoryCouncilProps>
  | WithBlocktype<"AboutUsOurTeam", AboutUsOurTeamProps>
  | WithBlocktype<"AboutUsOurVolunteer", AboutUsOurVolunteerProps>

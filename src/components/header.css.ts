import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const desktopHeaderNavWrapper = style({
  position: "relative",
  zIndex: 1,
  display: "none",
  "@media": {
    [media.desktopUp]: {
      display: "block",
      paddingTop: theme.space[4],
    },
  },
})

const mobileHeaderNavWrapperBase = style({
  display: "block",
  position: "relative",
  paddingTop: theme.space[3],
  "@media": {
    [media.desktopUp]: {
      display: "none",
    },
  },
})

export const mobileHeaderNavWrapper = styleVariants({
  open: [
    mobileHeaderNavWrapperBase,
    {
      background: theme.colors.primary,
    },
  ],
  closed: [mobileHeaderNavWrapperBase],
})

export const mobileNavSVGColorWrapper = styleVariants({
  primary: [{ color: theme.colors.primary }],
  reversed: [{ color: theme.colors.background }],
})

export const mobileNavOverlay = style({
  position: "absolute",
  width: "100vw",
  height: "auto",
  paddingTop: theme.space[4],
  background: theme.colors.primary,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  "@media": {
    [media.desktopUp]: {
      display: "none",
    },
  },
})

export const mobileNavLink = style({
  display: "block",
  color: theme.colors.red,
  fontSize: theme.fontSizes[2],
  paddingTop: theme.space[2],
  paddingBottom: theme.space[2],
  paddingLeft: theme.space[4],
  paddingRight: theme.space[4],
})

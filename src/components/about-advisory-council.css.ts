import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const CounsellorsContainer = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.space[2],
    padding: theme.space[2],
})

export const CounsellorBlock = style({
    borderRadius: theme.radii.card,
    backgroundColor: theme.colors.white,
    boxShadow: "2px 4px 5px 0px rgba(0, 0, 0, 0.25)",
    padding: "32px 24px",
    minWidth: 350,
    "@media": {
        [media.smallMobile]: {
            minWidth: 300,
        },
        [media.mobile]: {
            fontSize: 320,
        }
    },
})

export const AdvisorName = style({
    fontSize: theme.fontSizes[4],
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    lineHeight: theme.lineHeights.heading,
    color: theme.colors.black,
})
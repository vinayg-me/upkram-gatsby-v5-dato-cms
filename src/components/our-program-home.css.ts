import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const OurProgramContainer = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.space[2],
    padding: theme.space[2],
})

export const OurProgramBlock = style({
    backgroundColor: theme.colors.white,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "32px 24px",
    minWidth: 350,
    "@media": {
        [media.smallMobile]: {
            minWidth: 300,
        },
        [media.mobile]: {
            minWidth: 320,
        }
    }
})

export const RowContainer = style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.space[4],
    marginTop: theme.space[2],
})

export const Column = style({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: theme.colors.white,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "32px 24px",
    minWidth: 0,
    "@media": {
        [media.smallMobile]: {
            flexBasis: "100%",
        },
        [media.mobile]: {
            flexBasis: "100%",
        },
        [media.tablet]: {
            flexBasis: "100%",
        }
    }
})

export const OurProgramBlockTitle = style({
    fontSize: theme.fontSizes[4],
    fontWeight: theme.fontWeights.bold,
    textAlign: "left",
})

export const OurProgramImageContainer = style({
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
    margin: "16px 8px",
})

export const ReadMoreButton = style({
    color: theme.colors.muted,
    fontSize: theme.fontSizes[2],
    textAlign: "right",
})

export const ReadMoreButtonContainer = style({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
})
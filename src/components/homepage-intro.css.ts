import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const EmbeddedTextStyle = style({
    color: theme.colors.text,
    fontSize: theme.customFontSizes[1],
    "@media": {
        [media.smallMobile]: {
            fontSize: theme.fontSizes[2],
        },
        [media.mobile]: {
            fontSize: theme.fontSizes[2],
        },
        [media.tablet]: {
            fontSize: theme.fontSizes[3],
        },
    },
})

export const LearningCrisisContainer = style({
    borderRadius: theme.radii.card,
    backgroundColor: theme.colors.primary,
    padding: "24px 32px",
})
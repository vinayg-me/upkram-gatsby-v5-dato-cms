import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const EmbeddedTextStyle = style({
    color: theme.colors.text,
    fontSize: theme.customFontSizes[3],
    "@media": {
        [media.smallMobile]: {
            fontSize: theme.fontSizes[4],
        },
        [media.mobile]: {
            fontSize: theme.fontSizes[4],
        },
        [media.tablet]: {
            fontSize: theme.fontSizes[5],
        },
    },
})
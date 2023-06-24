import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "../components/ui.css"

export const HeadingStyle = style({
    color: theme.colors.text,
    fontSize: theme.fontSizes[5],
    fontWeight: theme.fontWeights.semibold,
    "@media": {
        [media.smallMobile]: {
            fontSize: theme.fontSizes[4],
        }
    },
})
import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const KeyStatisticBlock = style({
    padding: "32px 24px",
    minWidth: 250,
    "@media": {
        [media.smallMobile]: {
            padding: "16px 8px",
        },
        [media.mobile]: {
            padding: "24px 16px",
        }
    },
})

export const KeyStatisticTitle = style({
    color: theme.colors.red,
    fontSize: theme.fontSizes[6],
    maxWidth: "100%",
    margin: 0,
    padding: theme.space[2],
    "@media": {
        [media.smallMobile]: {
            fontSize: theme.fontSizes[3],
        },
        [media.mobile]: {
            fontSize: theme.fontSizes[4],
        },
        [media.tablet]: {
            fontSize: theme.fontSizes[5],
        },
    },
})

export const KeyStatisticSubTitle = style({
    color: theme.colors.red,
    fontSize: theme.fontSizes[5],
    margin: 0,
    padding: theme.space[2],
    maxWidth: "100%",
    "@media": {
        [media.smallMobile]: {
            fontSize: theme.fontSizes[2],
        },
        [media.mobile]: {
            fontSize: theme.fontSizes[3],
        },
        [media.tablet]: {
            fontSize: theme.fontSizes[4],
        },
    },
})
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

export const HeightFull = style({
    height: "100%",
})

export const FullHeightCol = style({
    height: "100%",
    width: "33%",
    "@media": {
        [media.smallMobile]: {
            width: "100%",
        },
        [media.mobile]: {
            width: "100%",
        }
    },
})

export const LogoContainer = style({
    display: "flex",
    backgroundColor: theme.colors.white,
    width: "100%",
    height: "100%",
    padding: "8px",
    flexDirection: "column",
})

export const FooterTitle = style({
    fontSize: theme.fontSizes[2],
    fontWeight: 600,
    marginBottom: 0,
})

export const FooterText = style({
    display: "flex",
    alignItems: "center",
    fontSize: theme.fontSizes[2],
})

export const FooterIcons = style({
    marginRight: "8px",
})

export const SecondCol = style({
    alignItems: "flex-start",
    height: '100%',
    width: '33%',
    "@media": {
        [media.smallMobile]: {
            width: "100%",
        },
        [media.mobile]: {
            width: "100%",
        }
    },
})
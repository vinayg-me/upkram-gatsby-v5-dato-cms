import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const skewedBackground = style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255,0.8)',
    "@media": {
        [media.desktopUp]: {
            transform: 'skewX(-15deg)',
            transformOrigin: 'top right',
            width: '33%'
        },
    }
})

export const textOverlay = style({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    "@media": {
        [media.desktopUp]: {
            transform: 'skewX(15deg)',
            transformOrigin: 'top right',
            position: 'relative',
            alignItems: 'start',
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    width: '80%'
})

export const heroHeading = style({
    fontSize: theme.fontSizes[6],
    fontWeight: theme.fontWeights.semibold,
    marginTop: theme.space[2],
    marginBottom: theme.space[2],
    "@media": {
        [media.smallMobile]: {
            fontSize: theme.fontSizes[4],
            textAlign: 'center'
        },
        [media.mobile]: {
            fontSize: theme.fontSizes[4],
            textAlign: 'center'
        },
        [media.tablet]: {
            fontSize: theme.fontSizes[4],
            textAlign: 'center'
        },
    },
})

export const heroSubheading = style({
    fontSize: theme.fontSizes[5],
    fontWeight: theme.fontWeights.semibold,
    marginTop: theme.space[2],
    marginBottom: theme.space[2],
    "@media": {
        [media.smallMobile]: {
            fontSize: theme.fontSizes[3],
            textAlign: 'center'
        },
        [media.mobile]: {
            fontSize: theme.fontSizes[3],
            textAlign: 'center'
        },
        [media.tablet]: {
            fontSize: theme.fontSizes[4],
            textAlign: 'center'
        },
        [media.desktop]: {
            fontSize: theme.fontSizes[5],
            fontWeight: theme.fontWeights.semibold,
            textAlign: 'center'
        },
    },
})
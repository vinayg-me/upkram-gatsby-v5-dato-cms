import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const skewedBackground = style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '30%',
    height: '100%',
    background: 'rgba(255,255,255,0.8)',
    transform: 'skewX(-15deg)',
    transformOrigin: 'top right',
    zIndex: 1
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
    zIndex: 2,
    flexDirection: 'column',
    transform: 'skewX(15deg)',
    transformOrigin: 'top right',
  })

  export const heroHeading = style({
    fontSize: theme.fontSizes[7],
    fontWeight: theme.fontWeights.semibold
  })
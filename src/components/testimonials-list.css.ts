import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const TestimonialsContainer = style({
    display: "flex",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    flexDirection: "column",
})

export const TestimonialCard = style({
    backgroundColor: theme.colors.white,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    minHeight: "250px",
    "@media": {
        [media.smallMobile]: {
            display: "flex",
            minHeight: "150px",
            flexDirection: "column",
            padding: "8px",

        },
        [media.mobile]: {
            display: "flex",
            minHeight: "150px",
            flexDirection: "column",
            padding: "8px",
        }
    },
})

export const TestimonialAvatar = style({
    width: "33%",
    marginRight: "20px",
    "@media": {
        [media.smallMobile]: {
            width: "100%",
            marginRight: "4px",

        },
        [media.mobile]: {
            width: "100%",
            marginRight: "4px",
        }
    },
})

export const TestimonialAvatarImage = style({
    width: "100%",
    borderRadius: "50%"
})

export const TestimonialContent = style({
    width: "67%",
    "@media": {
        [media.smallMobile]: {
            width: "100%",

        },
        [media.mobile]: {
            width: "100%",
        }
    },
})

export const TestimonialContentName = style({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.colors.black,
    lineHeight: "1.5rem",
    letterSpacing: "0.5px",
    "@media": {
        [media.smallMobile]: {
            textAlign: "center",

        },
        [media.mobile]: {
            textAlign: "center",
        }
    },
})

export const TestimonialJobTitle = style({
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.5rem",
    letterSpacing: "0.5px",
    "@media": {
        [media.smallMobile]: {
            textAlign: "center",

        },
        [media.mobile]: {
            textAlign: "center",
        }
    },
})

export const TestimonialQuote = style({
    fontSize: "1rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.5px",
    textAlign: "justify"
})

export const CarouselIndicators = style({
    display: "block",
    "@media": {
        [media.smallMobile]: {
            display: "none",
        },
        [media.mobile]: {
            display: "none"
        }
    },
})

export const IndicatorButton = style({
    background: "none",
    border: "none",
    color: theme.colors.black,
    fontSize: "2rem",
    cursor: "pointer"
})

export const TestimonialRow = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
})

export const CarouselIndicatorsMobile = style({
    display: "none",
    "@media": {
        [media.smallMobile]: {
            display: "flex",
            justifyContent: "center",
            marginTop: "8px"

        },
        [media.mobile]: {
            display: "flex",
            justifyContent: "center",
            marginTop: "8px"
        }
    },
})

export const IndicatorMobile = style({
    display: "none",
    "@media": {
        [media.smallMobile]: {
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: theme.colors.black,
            margin: "0 4px",
            cursor: "pointer"
        },
        [media.mobile]: {
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: theme.colors.black,
            margin: "0 4px",
            cursor: "pointer"
        }
    },
})

export const IndicatorMobileActive = style({
    display: "none",
    "@media": {
        [media.smallMobile]: {
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: theme.colors.muted,
            margin: "0 4px",
            cursor: "pointer"
        },
        [media.mobile]: {
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: theme.colors.muted,
            margin: "0 4px",
            cursor: "pointer"
        }
    },
})
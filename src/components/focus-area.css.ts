import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const FocusAreaContainer = style({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.space[2],
    padding: theme.space[2],
})

export const FocusAreaBlock = style({
    borderRadius: theme.radii.card,
    backgroundColor: theme.colors.primary,
    boxShadow: "2px 4px 5px 0px rgba(0, 0, 0, 0.25)",
    padding: "32px 24px",
})
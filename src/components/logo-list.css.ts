import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const LogoContainer = style({
    borderRadius: theme.radii.card,
    backgroundColor: theme.colors.white,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    minWidth: 150,
    minHeight: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";
import { media } from "./ui.css";

export const RowContainer = style({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.space[4],
    marginTop: theme.space[2],
    "@media": {
        [media.smallMobile]: {
            flexDirection: "column",
        },
        [media.mobile]: {
            flexDirection: "column",
        }
    }
})

export const MotoBlock = style({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: theme.colors.grey,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "32px 24px",
    minWidth: 0,
})

export const MotoBlockImageContainer = style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minWidth: 0
})
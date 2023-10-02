import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

export const FormLabel = style({
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes[2],
    fontWeight: theme.fontWeights.normal,
    display: 'block'
})

export const FormInput = style({
    height: 48,
    lineHeight: 24,
    width: 320,
    marginTop: 8,
    marginBottom: 8,
    border: '1px solid var(--Light-Stroke, #D9D9D9)',
    "@media": {
        [media.smallMobile]: {
            width: '100%',
        },
        [media.mobile]: {
            width: '100%',
        }
    }
})

export const FormTextArea = style({
    marginTop: 8,
    marginBottom: 8,
    border: '1px solid var(--Light-Stroke, #D9D9D9)',
    overflow: 'hidden',
    "@media": {
        [media.smallMobile]: {
            width: '100%',
        },
        [media.mobile]: {
            width: '100%',
        }
    }
})

export const RowContainer = style({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: 10,
    "@media": {
        [media.smallMobile]: {
            gridTemplateColumns: '1fr',
        },
        [media.mobile]: {
            gridTemplateColumns: '1fr',
        }
    }
})

export const ColContainer = style({
    padding: 8
})



// element.style {
//     height: 48px;
//     line-height: 24px;
//     width: 360px;
//     /* margin: 16px; */
//     margin-top: 16px;
//     /* border-color: red; */
//     border-radius: 4px;
//     border: 1px solid var(--Light-Stroke, #D9D9D9);
// }
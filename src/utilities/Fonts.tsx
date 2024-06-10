import { Global } from "@emotion/react"
import React from "react"

const Fonts = () => (
    <Global
      styles={`
        @font-face {
            font-family: 'ppmori';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('../assets/fonts/ppmori/PPMori-Regular.otf') format('otf');
        }
      `}
    />
)

export default Fonts
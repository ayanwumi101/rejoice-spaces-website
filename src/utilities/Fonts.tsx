import { Global } from "@emotion/react"
import React from "react"

const Fonts = () => (
    <Global
      styles={`
        @font-face {
            font-family: 'league-spartan';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('../assets/fonts/league-spartan/LeagueSpartan-Regular.ttf') format('ttf');
        }
      `}
    />
)

export default Fonts
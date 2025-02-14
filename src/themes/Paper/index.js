// tools
import React from "react"
import { ThemeProvider } from "styled-components"

// NOTE: fonts are loaded as part of critical path in public/index.html
// import { fonts } from "./helpers/font-loader"

// styles
import ThemeGlobals from "./styles/globals"

// theme
import { Paper } from "./Paper"
// import "typeface-lora"
// import "typeface-exo-2"

// fonts()

// render
export default props => {
  return (
    <ThemeProvider theme={Paper}>
      <ThemeGlobals>
        {props.children}
      </ThemeGlobals>
    </ThemeProvider>
  )
}

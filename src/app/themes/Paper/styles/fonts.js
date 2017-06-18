// tools
import { css } from "styled-components"

// fonts
import eot 		from "typeface-exo-2/files/exo-2-latin-600.eot"
import woff 	from "typeface-exo-2/files/exo-2-latin-600.woff"
import woff2 	from "typeface-exo-2/files/exo-2-latin-600.woff2"

/* exo-2-600normal - latin */
export const Exo2Latin600 = css`
@font-face {
  font-family: 	"Exo 2";
  font-style: 	normal;
  font-weight: 	600;
  src: 					url(${ eot }); 					/* IE9 Compat Modes */
  src:
    local("Exo 2 SemiBold "),
    local("Exo 2-SemiBold"),
    url(${ woff2 }) 	format("woff2"), 	/* Super Modern Browsers */
    url(${ woff }) 		format("woff"); 	/* Modern Browsers */
}
`
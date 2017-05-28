// style
import { css } from "styled-components"
import { exact, min, max, breakpoints } from "./media"

// theme css defaults
export const def = {
	color: {
  	brand: 				"#ed236e",
		foreground:		"#2c2c2c",
		background:		"#fff",
		highlight:		"#fff200",
	},
	opacity: {
		most: 	.85,
		half: 	.5,
		least: 	.125,
	},
	effects: {
		borderRadius : { // base: multiplier
			small: 	.25,
			med:		.5,
		}
	},
	typography: {
		title: {
			auto: css`
				font-family: 			Arial, sans-serif;
				letter-spacing: 	0.005em;
				line-height: 			1.15em;
				font-weight: 			700;
				margin: 0;
			
				.fonts-loaded-headers && {
					font-family: 			"Exo 2", Arial sans-serif;
					letter-spacing: 	0.025em;
					line-height: 			1.15em;
					font-weight: 			600;
				}
			`,
		},
		text: {
			auto: css`
				font-family: 			Georgia, serif;
				letter-spacing: 	0.05em;
				line-height: 			1.75em;
				
				.fonts-loaded & {
					font-family: 			Lora, Georgia, serif;
					letter-spacing: 	0.025em;
				}			
			`,
		},
	},
	size: {
		breakpoint: {
			exact,
			min,
			max,
			stops: {
				min: 	breakpoints.xs[1],
				max: 	breakpoints.xl[1]
			},
		},
		font: { // base: pixels
			l: 	23,
			m: 	20,
			s: 	18,
			xs: 17,
			make: {	// base: multiplier
				larger: 	3,
				normal: 	1,
				smaller: 	0.85,
			},
			// automatically set font size based on screen size; should be at the top of most components' css
			auto: css`
					${ min.m`font-size: 	${ () => def.size.font.m 	}px;` }
					${ max.s`font-size: 	${ () => def.size.font.s 	}px;` }
					${ max.xs`font-size: 	${ () => def.size.font.xs }px;` }
					${ min.xxl`font-size:	${ () => def.size.font.l 	}px;` }
				`
		},
		block: {
			column: {
				maxwidth: { // base: pixels
					m: 	750,
					l: 	820,
				},
				safety: 1.5, // base: multiplier
			},
			spacing: 1, // base: multiplier
		},
	},
	layer: {
		overlay:		40,
		menu:				30,
		card:				20,
		up:					10,
		tuck:				-1
	},
	elements: {
		thickBorder: () => "8px solid " + def.color.foreground,
	}
}

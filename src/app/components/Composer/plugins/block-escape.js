// tools

// components


// return
export function PluginBlockEscape(options) {
	const { block, key } = options
	return {
		onKeyDown(event, data, state) {
			const { focusBlock } = state
			const { type } = focusBlock
			if (type !== block || event.key !== key) return
			event.preventDefault()
			if (!event.shiftKey)		// escape block onto next paragraph
			return state
				.transform()
				.insertBlock({
					type: "paragraph",
				})
				.focus()
				.apply()
			else										// add line break if Shift key is pressed
			return state
				.transform()
				.insertText("\n")
				.apply()
		}
	}
}

{
  	
		
		
		
			
// 		const { document } = state
// 
// 		const getTopMostParent = (document, node) => {
// 			if (document.getParent(node.key).kind === "document") {
// 				return node
// 			} else {
// 				return getTopMostParent(document, document.getParent(node.key))
// 			}
// 		}
// 		let selected = getTopMostParent(document, state.focusBlock)
// 		
// 		if(selected.type === "quote"){console.log(selected.type)
// 			return state
// 				.transform()
// 				.setNodeByKey(selected.key, {data:{ className: "focus" }})
// 				.setBlock({data:{ className: "focus" }})
// 		    .apply()
// 		} 
		
		
		
		
		
		
		
		
		
		
		
		

// export function PluginFormatQuote() {
// 	return {
// 		onChange(state) {
// 			const { document } = state
// 			const quoteNodes = document.getBlocksByTypeAsArray("quote")
// 			for (let quote of quoteNodes) {
// 				quote.length > 150 ? console.log(quote.data.className) : null
// 			}
// 		}
// 	}
// }


// ${ props => props.textLength > 150 ? css`
// ${	props => props.theme.size.breakpoint.min.l`
// 		column-count: 2;
// 		column-gap: ${ props => props.theme.size.block.column.safety * 2 }em;
// ` }` : null }


// export const Quote = props => {
// 	return (
// 		<PageQuote {...props} cite={ props.cite } textLength={ props.children.toString().length }>
// 			<p>{ props.children }</p>
// 			{ props.cite ? <cite>{ props.cite }</cite> : null }
// 		</PageQuote>
// 	)
// }
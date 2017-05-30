// tools
import throttle from "lodash/throttle"

// return
export function Save(options) {
	const { html } = options
	let throttledSave = throttle((state) => {
		const composerState = html.serialize(state)
		localStorage.setItem("composer-state", composerState)
	}, 5000);
  return {
  	onChange(state) {
  		throttledSave(state)
		}
  }
}




	
 
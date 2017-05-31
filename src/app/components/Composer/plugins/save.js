// tools
import throttle from "lodash/throttle"

// return
export function Save(options) {
	const { html } = options
	let throttledSave = throttle((state, prevState) => {
		if(prevState && state.document !== prevState.document){
			const composerState = html.serialize(state)
			localStorage.setItem("composer-state", composerState)
		}
	}, 5000);
  return {
  	onChange(state, prevState) {
  		throttledSave(state, prevState)
		}
  }
}




	
 
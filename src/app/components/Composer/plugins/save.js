// tools
import { Raw } from "slate"
import throttle from "lodash/throttle"

// redux
import store from "../../../store"

// return
export function Save(options) {
	let throttledSave = throttle((state, prevState) => {
		const composerOptions = {}
			console.log(1)
		store.subscribe(() => {
			composerOptions.title = store.getState().composer.title
			composerOptions.subtitle = store.getState().composer.subtitle
		})
		localStorage.setItem("composer-options", composerOptions)
		
		if(!prevState || state.document !== prevState.document){
			const composerState = JSON.stringify(Raw.serialize(state))
			localStorage.setItem("composer-state", composerState)
		}
	}, 5000);
  return {
  	onChange(state, prevState) {
  		throttledSave(state, prevState)
		}
  }
}




	
 
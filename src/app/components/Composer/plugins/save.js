// tools
import { Raw } from "slate"
import throttle from "lodash/throttle"

// return
export function Save(options) {
	let throttledSave = throttle((state, prevState) => {
		if(prevState && state.document !== prevState.document){
			const composerState = JSON.stringify(Raw.serialize(state))
			//localStorage.setItem("composer-state", composerState)
			console.log(state);
		}
	}, 5000);
  return {
  	onChange(state, prevState) {
  		throttledSave(state, prevState)
		}
  }
}




	
 
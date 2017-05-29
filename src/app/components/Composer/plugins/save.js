// tools

// return
export function Save(options) {
	const { html } = options
	let throttledSave = _.throttle(() => {
		console.log(0)
		const composerState = html.serialize(state)
		localStorage.setItem("composer-state", composerState)
	}, 200);
  return {
  	onChange(state) {
  		throttledSave
		}
  }
}




	
 
export function changeName(name) {
	// return dispatch => {
// 		setTimeout(() => {
// 			dispatch({
// 				type: "CHANGE_NAME",
// 					payload: name
// 			});
// 		}, 2000);
// 	}
	return {
		type: "CHANGE_NAME",
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(name);
			}, 2000);
		})
	};
}

export function changeAge(age) {
	return {
		type: "CHANGE_AGE",
		payload: age
	}
}
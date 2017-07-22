export const imageSrcToPictureId = src => {
	if(!src.contains(".jpg")) return "default"
	let id
	id = src.split('\\').pop().split('/').pop() 	// get rid of domain and pathname
	id = id.replace(/\.[^/.]+$/, "") 			// get rid of extension
	return id
}

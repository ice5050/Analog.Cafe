// tools
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

// components
import App from "./app/views/App"

// redux
import store from "./app/store"

render(
	<Provider store={ store } >
		<App />
	</Provider>,
	window.document.getElementById("app")
)

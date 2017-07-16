// tools
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux";

// components
import App from "./app/containers/App"

// redux
import store from "./store";

render(
	<Provider store={ store } >
		<App />
	</Provider>,
	window.document.getElementById('app')
)

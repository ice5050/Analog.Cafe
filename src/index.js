// tools
import React from "react"
import { render } from "react-dom"
import Helmet from "react-helmet"

// router
import { BrowserRouter } from "react-router-dom"

// redux
import store from "./store";
import { Provider } from "react-redux"

// theme
import Paper from "./themes/Paper"

// components
import App from "./app/containers/App"

// launch!
render(
	<Provider store={ store } >
		<BrowserRouter>
			<Paper>
				<Helmet
					defaultTitle="Analog.Cafe ☕️"
					titleTemplate="%s ☕️ Analog.Cafe"
				/>
				<App />
			</Paper>
		</BrowserRouter>
	</Provider>,
	window.document.getElementById('app')
)

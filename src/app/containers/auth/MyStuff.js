// tools
import React from "react"

// redux
import { connect } from "react-redux"

// components
import List from "../List"
import Forbidden from "../errors/Forbidden"


// render
const MyStuff = props => {
	return props.user.status === "ok"
		? <div>
			<span>Hello</span>
			<List />
		</div>
		: <Forbidden />
}

// connet with redux
const mapStateToProps = state => {
	return {
    user: state.user,
	}
}
export default connect(mapStateToProps)(MyStuff)

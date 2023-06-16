import React from "react"
import { BeatLoader as Loader } from "react-spinners"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(() => ({
	loaderContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		width: "100vw",
		backgroundColor: "white",
		zIndex: 9999,
		position: "sticky",
		top: 0,
		left: 0,
	},
}))

export default function PageLoader() {
	const classes = useStyles()
	return (
		<div className={classes.loaderContainer}>
			<Loader sizeUnit="px" size={25} color="#9e0000" loading={true} />
		</div>
	)
}

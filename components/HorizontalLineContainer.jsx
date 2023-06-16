import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	leftLineContainer: {
		flex: "1 1 auto",
	},
	rightLineContainer: {
		flex: "1 1 auto",
	},
	line: {
		borderTopStyle: "solid",
		borderTopWidth: "1px",
		display: "block",
		borderColor: theme.palette.primary.contrastText,
	},
	content: {
		margin: `0 ${theme.spacing(2)}px`,
	},
}))

export default function HorizontalLineContainer({ children }) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<div className={classes.leftLineContainer}>
				<span className={classes.line} />
			</div>
			<div className={classes.content}>{children}</div>
			<div className={classes.rightLineContainer}>
				<span className={classes.line} />
			</div>
		</div>
	)
}

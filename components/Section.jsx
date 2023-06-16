import React from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
	section: {
		backgroundColor: theme.palette.background.default,
		padding: `${theme.spacing(10)}px 0`,
	},
}))

export default function Section({ children, className, maxWidth }) {
	const classes = useStyles()
	return (
		<section className={classes.section}>
			<Container className={className} fixed maxWidth={maxWidth || "lg"}>
				{children}
			</Container>
		</section>
	)
}

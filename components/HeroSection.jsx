import React from "react"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
	heroSection: {
		display: "flex",
		flexDirection: "column",
		height: "92vh",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: theme.palette.primary.contrastText,
		backgroundColor: "transparent",
	},
}))

export default function HeroSection({ children }) {
	const classes = useStyles()

	return (
		<section className={classes.heroSection}>
			<Container fixed maxWidth="md">
				{children}
			</Container>
		</section>
	)
}

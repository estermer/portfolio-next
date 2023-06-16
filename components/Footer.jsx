import React from "react"
import Link from "next/Link"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {
	FaFacebookF as FacebookIcon,
	FaStrava as StravaIcon,
} from "react-icons/fa"

const useStyles = makeStyles(theme => ({
	footer: {
		padding: `${theme.spacing(10)}px 0`,
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.background.dark,
		zIndex: theme.zIndex.appBar,
		position: "relative",
	},
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	socialIcons: {
		margin: `${theme.spacing(2)}px 0`,
		"& a": {
			margin: `0 ${theme.spacing(2)}px`,
		},
	},
	rowLinks: {
		display: "flex",
		flexDirection: "row",
	},
}))

export default function Footer() {
	const classes = useStyles()

	return (
		<footer className={classes.footer}>
			<Container className={classes.container} fixed maxWidth="md">
				<Typography variant="h5">Auburn Pulsars</Typography>
				<div className={classes.socialIcons}>
					<a
						href="https://www.facebook.com/groups/PulsarsXC/"
						rel="noopener noreferrer"
						target="_blank">
						<FacebookIcon size="1.5em" />
					</a>
					<a
						href="https://www.strava.com/clubs/pulsars"
						rel="noopener noreferrer"
						target="_blank">
						<StravaIcon size="1.5em" />
					</a>
				</div>
				<div className={classes.rowLinks}>
					<Link href="/privacy-policy" passHref>
						<Typography component="a">Privacy Policy |</Typography>
					</Link>
					&nbsp;
					<Link href="https://www.ericstermer.com/" passHref>
						<Typography component="a" rel="noopener noreferrer" target="_blank">
							Made by Eric Stermer
						</Typography>
					</Link>
				</div>
			</Container>
		</footer>
	)
}

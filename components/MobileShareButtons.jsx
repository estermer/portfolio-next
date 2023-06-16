import React from "react"
import { Hidden, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {
	FaFacebookF as FacebookIcon,
	FaTwitter as TwitterIcon,
} from "react-icons/fa"

const useStyles = makeStyles(theme => ({
	shareContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		position: "fixed",
		left: 0,
		bottom: 0,
		width: "100vw",
		padding: 15,
		backgroundColor: theme.palette.background.default,
		border: "solid #EEE 1px",
		zIndex: theme.zIndex.mobileStepper,
	},
}))

const fbShare =
	"https://www.facebook.com/sharer.php?u=http://auburnpulsars.com/news/"
const twitterShare =
	"https://twitter.com/intent/tweet?hashtags=auburnpulsars&url=http://auburnpulsars.com/news/"

export default function MobileShareButtons({ slug }) {
	const classes = useStyles()

	return (
		<Hidden smUp>
			<div className={classes.shareContainer}>
				<IconButton
					color="secondary"
					component="a"
					href={`${fbShare}${slug}`}
					rel="noopener noreferrer"
					target="_blank"
					variant="contained">
					<FacebookIcon />
				</IconButton>
				<IconButton
					color="secondary"
					component="a"
					href={`${twitterShare}${slug}`}
					rel="noopener noreferrer"
					target="_blank"
					variant="contained">
					<TwitterIcon />
				</IconButton>
			</div>
		</Hidden>
	)
}

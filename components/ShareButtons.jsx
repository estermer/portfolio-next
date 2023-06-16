import React from "react"
import { Hidden, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {
	FaFacebookF as FacebookIcon,
	FaTwitter as TwitterIcon,
} from "react-icons/fa"

const useStyles = makeStyles({
	shareContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		position: "fixed",
		left: 0,
		top: 0,
		height: "100vh",
		marginLeft: 15,
	},
})

const fbShare =
	"https://www.facebook.com/sharer/sharer.php?u=https://www.auburnpulsars.com/news/"
const twitterShare =
	"https://twitter.com/intent/tweet?hashtags=auburnpulsars&url=https://www.auburnpulsars.com/news/"

export default function ShareButtons({ slug }) {
	const classes = useStyles()

	return (
		<Hidden xsDown>
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

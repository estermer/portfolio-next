import React from "react"
import { Box, IconButton } from "@mui/material"
import {
	FaFacebookF as FacebookIcon,
	FaTwitter as TwitterIcon,
} from "react-icons/fa"

const fbShare =
	"https://www.facebook.com/sharer.php?u=http://auburnpulsars.com/news/"
const twitterShare =
	"https://twitter.com/intent/tweet?hashtags=auburnpulsars&url=http://auburnpulsars.com/news/"

export default function MobileShareButtons({ slug }) {
	return (
		<Box
			sx={{
				display: { xs: "flex", sm: "none" },
				flexDirection: "row",
				justifyContent: "center",
				position: "fixed",
				left: 0,
				bottom: 0,
				width: "100vw",
				padding: "15px",
				backgroundColor: "background.default",
				border: "solid #EEE 1px",
				zIndex: (theme) => theme.zIndex.mobileStepper,
			}}>
			<IconButton
				color="secondary"
				component="a"
				href={`${fbShare}${slug}`}
				rel="noopener noreferrer"
				target="_blank">
				<FacebookIcon />
			</IconButton>
			<IconButton
				color="secondary"
				component="a"
				href={`${twitterShare}${slug}`}
				rel="noopener noreferrer"
				target="_blank">
				<TwitterIcon />
			</IconButton>
		</Box>
	)
}

import React from "react"
import { Box, IconButton } from "@mui/material"
import {
	FaFacebookF as FacebookIcon,
	FaTwitter as TwitterIcon,
} from "react-icons/fa"

const fbShare =
	"https://www.facebook.com/sharer/sharer.php?u=https://www.auburnpulsars.com/news/"
const twitterShare =
	"https://twitter.com/intent/tweet?hashtags=auburnpulsars&url=https://www.auburnpulsars.com/news/"

export default function ShareButtons({ slug }) {
	return (
		<Box
			sx={{
				display: { xs: "none", sm: "flex" },
				flexDirection: "column",
				justifyContent: "center",
				position: "fixed",
				left: 0,
				top: 0,
				height: "100vh",
				marginLeft: "15px",
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

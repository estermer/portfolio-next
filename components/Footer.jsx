import React from "react"
import Link from "next/link"
import { Box, Container, Typography } from "@mui/material"
import {
	FaFacebookF as FacebookIcon,
	FaStrava as StravaIcon,
} from "react-icons/fa"

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				padding: (theme) => `${theme.spacing(10)} 0`,
				color: "primary.contrastText",
				backgroundColor: (theme) => theme.palette.background.dark,
				zIndex: (theme) => theme.zIndex.appBar,
				position: "relative",
			}}>
			<Container
				fixed
				maxWidth="md"
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Typography variant="h5">Auburn Pulsars</Typography>
				<Box
					sx={{
						margin: (theme) => `${theme.spacing(2)} 0`,
						"& a": { margin: (theme) => `0 ${theme.spacing(2)}` },
					}}>
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
				</Box>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Typography component={Link} href="/privacy-policy">
						Privacy Policy |
					</Typography>
					&nbsp;
					<Typography
						component={Link}
						href="https://www.ericstermer.com/"
						rel="noopener noreferrer"
						target="_blank">
						Made by Eric Stermer
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

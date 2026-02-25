import React from "react"
import Link from "next/link"
import {
	AppBar,
	Box,
	Container,
	Toolbar,
	Typography,
	useScrollTrigger,
} from "@mui/material"

export default function Nav({ pathname }) {
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 150,
	})

	const isClear = !scrollTrigger && pathname === "/"

	return (
		<Box sx={{ display: { xs: "none", md: "block" } }}>
			<AppBar
				sx={
					isClear
						? {
								backgroundColor: "transparent",
								boxShadow: "none",
								color: "primary.contrastText",
							}
						: {
								backgroundColor: "background.default",
								color: "text.primary",
								boxShadow: (theme) => theme.shadows[4],
							}
				}
				position="sticky">
				<Toolbar>
					<Container
						fixed
						maxWidth="md"
						sx={{
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
							padding: (theme) => `${theme.spacing(1)} 0`,
						}}>
						<Typography component={Link} href="/" variant="h6">
							Home
						</Typography>
						<Typography component={Link} href="/about" variant="h6">
							About
						</Typography>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

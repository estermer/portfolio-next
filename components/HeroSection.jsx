import React from "react"
import { Box, Container } from "@mui/material"

export default function HeroSection({ children }) {
	return (
		<Box
			component="section"
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "92vh",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				color: "primary.contrastText",
				backgroundColor: "transparent",
			}}>
			<Container fixed maxWidth="md">
				{children}
			</Container>
		</Box>
	)
}

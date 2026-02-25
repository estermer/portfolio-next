import React from "react"
import { Box, Container } from "@mui/material"

export default function Section({ children, className, maxWidth }) {
	return (
		<Box
			component="section"
			sx={{
				backgroundColor: "background.default",
				padding: (theme) => `${theme.spacing(10)} 0`,
			}}>
			<Container className={className} fixed maxWidth={maxWidth || "lg"}>
				{children}
			</Container>
		</Box>
	)
}

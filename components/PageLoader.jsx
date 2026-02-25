import React from "react"
import { Box, CircularProgress } from "@mui/material"

export default function PageLoader() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100vw",
				backgroundColor: "white",
				zIndex: 9999,
				position: "sticky",
				top: 0,
				left: 0,
			}}>
			<CircularProgress size={50} sx={{ color: "#9e0000" }} />
		</Box>
	)
}

import React from "react"
import { Box } from "@mui/material"

const lineSx = {
	borderTopStyle: "solid",
	borderTopWidth: "1px",
	display: "block",
	borderColor: "primary.contrastText",
}

export default function HorizontalLineContainer({ children }) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
			}}>
			<Box sx={{ flex: "1 1 auto" }}>
				<Box component="span" sx={lineSx} />
			</Box>
			<Box sx={{ margin: (theme) => `0 ${theme.spacing(2)}` }}>{children}</Box>
			<Box sx={{ flex: "1 1 auto" }}>
				<Box component="span" sx={lineSx} />
			</Box>
		</Box>
	)
}

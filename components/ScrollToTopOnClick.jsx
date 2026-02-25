import React from "react"
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material"
import { MdKeyboardArrowUp as UpArrowIcon } from "react-icons/md"

export default function ScrollToTop() {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 150,
	})

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor",
		)

		if (anchor) {
			anchor.scrollIntoView({ behavior: "smooth", block: "center" })
		}
	}

	return (
		<Zoom in={trigger}>
			<Box
				onClick={handleClick}
				role="presentation"
				sx={{
					position: "fixed",
					bottom: (theme) => theme.spacing(3),
					right: (theme) => theme.spacing(3),
					zIndex: (theme) => theme.zIndex.tooltip,
				}}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
					<UpArrowIcon size="2em" />
				</Fab>
			</Box>
		</Zoom>
	)
}

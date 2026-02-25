import React, { useState } from "react"
import Link from "next/link"
import {
	AppBar,
	Box,
	Container,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemText,
	Toolbar,
	useScrollTrigger,
} from "@mui/material"
import { MdMenu as MenuIcon, MdClose as CloseIcon } from "react-icons/md"

export default function MobileNav({ pathname }) {
	const [isOpen, setIsOpen] = useState(false)
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	const isClear = !scrollTrigger && pathname === "/"

	const handleDrawerOpen = () => setIsOpen(true)
	const handleDrawerClose = () => setIsOpen(false)

	return (
		<Box sx={{ display: { xs: "block", md: "none" } }}>
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
						sx={{
							display: "flex",
							alignItems: "center",
							padding: (theme) => `${theme.spacing(1)} 0`,
						}}>
						<IconButton color="inherit" onClick={handleDrawerOpen}>
							<MenuIcon />
						</IconButton>
						<Link href="/" style={{ margin: "0 auto" }}>
							<img alt="logo" src="/images/pulsar-logo.png" height="60px" />
						</Link>
						<Box sx={{ width: 50 }} />
					</Container>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: 300,
					flexShrink: 0,
					"& .MuiDrawer-paper": { width: 300 },
				}}
				variant="persistent"
				anchor="left"
				open={isOpen}>
				<Box
					sx={(theme) => ({
						display: "flex",
						alignItems: "center",
						padding: theme.spacing(0, 1),
						...theme.mixins.toolbar,
						justifyContent: "flex-end",
					})}>
					<IconButton onClick={handleDrawerClose}>
						<CloseIcon />
					</IconButton>
				</Box>
				<List>
					<ListItemButton component={Link} href="/" onClick={handleDrawerClose}>
						<ListItemText primary="Home" />
					</ListItemButton>
					<ListItemButton
						component={Link}
						href="/about"
						onClick={handleDrawerClose}>
						<ListItemText primary="About" />
					</ListItemButton>
				</List>
			</Drawer>
		</Box>
	)
}

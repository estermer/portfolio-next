import React, { useState } from "react"
import Link from "next/Link"
import {
	AppBar,
	Container,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	useScrollTrigger,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { MdMenu as MenuIcon, MdClose as CloseIcon } from "react-icons/md"
import cx from "classnames"

const useStyles = makeStyles(theme => ({
	mobileAppBar: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
		boxShadow: theme.shadows[4],
	},
	clearAppBar: {
		backgroundColor: "transparent",
		boxShadow: "none",
		color: theme.palette.primary.contrastText,
	},
	mobileContainer: {
		display: "flex",
		alignItems: "center",
		padding: `${theme.spacing(1)}px 0`,
	},
	logo: {
		margin: "0 auto",
	},
	drawer: {
		width: 300,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 300,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
}))

export default function MobileNav({ pathname }) {
	const [isOpen, setIsOpen] = useState(false)
	const classes = useStyles()
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	const handleDrawerOpen = () => setIsOpen(true)
	const handleDrawerClose = () => setIsOpen(false)

	return (
		<Hidden mdUp>
			<AppBar
				className={cx(classes.mobileAppBar, {
					[classes.clearAppBar]: !scrollTrigger && pathname === "/",
				})}
				position="sticky">
				<Toolbar>
					<Container className={classes.mobileContainer}>
						<IconButton color="inherit" onClick={handleDrawerOpen}>
							<MenuIcon />
						</IconButton>
						<Link href="/" passHref>
							<a className={classes.logo}>
								<img alt="logo" src="/images/pulsar-logo.png" height="60px" />
							</a>
						</Link>
						<div style={{ width: 50 }} />
					</Container>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={isOpen}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<CloseIcon />
					</IconButton>
				</div>
				<List>
					<Link href="/">
						<ListItem onClick={handleDrawerClose} button>
							<ListItemText primary="Home" />
						</ListItem>
					</Link>
					<Link href="/about">
						<ListItem onClick={handleDrawerClose} button>
							<ListItemText primary="About" />
						</ListItem>
					</Link>
				</List>
			</Drawer>
		</Hidden>
	)
}

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import theme from "../theme"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer"
import PageLoader from "../components/PageLoader"
import ScrollToTopOnPathChange from "../components/ScrollToTopOnPathChange"
import ScrollToTopOnClick from "../components/ScrollToTopOnClick"

import "../styles/global.css"
import "../styles/post.css"

export default function MyApp({ Component, pageProps, router }) {
	const [isLoaded, setIsLoaded] = useState(false)
	const [isRouteChange, setIsRouteChange] = useState(false)

	const scrollIntoView = () => {
		const anchor = document.querySelector("#back-to-top-anchor")

		if (anchor) {
			anchor.scrollIntoView({ block: "center" })
		}
	}

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	useEffect(() => {
		// handle initial load
		const timer = setTimeout(() => {
			setIsLoaded(true)
			scrollIntoView()
		}, 3000)

		return () => timer && clearTimeout(timer)
	}, [isLoaded])

	useEffect(() => {
		let timer = null
		// handle route change
		const handleRouteStart = () => {
			if (timer) clearTimeout(timer)
			setIsRouteChange(true)
		}
		const handleRouteComplete = () => {
			setTimeout(() => {
				setIsRouteChange(false)
				scrollIntoView()
			}, 1500)
			clearTimeout(timer)
		}

		router.events.on("routeChangeStart", handleRouteStart)
		router.events.on("routeChangeComplete", handleRouteComplete)

		return () => {
			router.events.off("routeChangeStart", handleRouteStart)
			router.events.off("routeChangeComplete", handleRouteComplete)
		}
	}, [isRouteChange])

	const usePageLoader = !isLoaded || isRouteChange

	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Eric Stermer's Website"/>
				<title>Eric Stermer</title>
				<link rel="canonical" href="http://ericstermer.com/" />
				<link
					href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans&display=swap"
					rel="stylesheet"/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				{usePageLoader && <PageLoader />}
				<ScrollToTopOnPathChange {...router} />
				<div id="back-to-top-anchor" />
				<Nav {...router} />
				<MobileNav {...router} />
				<Component {...pageProps} />
				<ScrollToTopOnClick />
				<Footer />
			</ThemeProvider>
		</>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

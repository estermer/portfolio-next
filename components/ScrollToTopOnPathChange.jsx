import { useEffect } from "react"

const ScrollToTopOnPathChange = ({ pathname }) => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

export default ScrollToTopOnPathChange

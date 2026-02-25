import React from "react"
import Head from "next/head"
import { getExcerpt, getTitle } from "../lib/post-helpers"

const fbAppId = process.env.REACT_APP_FB_APP_ID

export default function Meta({ title, excerpt, image, url, type }) {
	const pageUrl = url || "https://www.auburnpulsars.com/"
	const pageTitle = title ? getTitle(title) : "Auburn Pulsars"
	const pageImage =
		image || "https://www.auburnpulsars.com/images/pulsar-logo.png"
	const pageDesc = excerpt
		? getExcerpt(excerpt)
		: "Auburn Pulsars Running Club Website"

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDesc} />
			<meta property="twitter:card" content="summary" key="tcard" />
			<meta property="twitter:title" content={pageTitle} key="ttitle" />
			<meta property="twitter:description" content={pageDesc} key="tdesc" />
			<meta property="twitter:image" content={pageImage} key="timage" />
			<meta property="fb:page_id" content={fbAppId} key="fbappid" />
			<meta property="og:type" content={type || "website"} key="ogtype" />
			<meta property="og:site_name" content="Auburn Pulsars" key="ogname" />
			<meta property="og:title" content={pageTitle} key="ogtitle" />
			<meta property="og:url" content={pageUrl} key="ogurl" />
			<meta property="og:image" content={pageImage} key="ogimage" />
			<meta property="og:description" content={pageDesc} key="ogdesc" />
		</Head>
	)
}

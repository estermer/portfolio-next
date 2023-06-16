import React from "react"
import Section from "../components/Section"

export default function PageUnderConstruction() {
	return (
		<Section
			style={{
				height: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<img
				alt="Under Construction"
				src="/images/under-construction.png"
				width="100%"/>
		</Section>
	)
}

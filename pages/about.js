import React from "react"
import { Box, Typography } from "@mui/material"
import Section from "../components/Section"

export default function About() {
	return (
		<>
			<Section maxWidth="md">
				<Typography gutterBottom variant="h2">
					Pulsar Beginnings
				</Typography>
				<Typography gutterBottom>
					After Bill Bowerman publishing his book &quot;Jogging&quot;, a running
					craze took off across America. The 1970&apos;s saw a huge push of
					local running groups and Auburn, NY did not hesitate to join the fun.
				</Typography>
				<Typography gutterBottom>
					Established in 1976, A group of local runners (notabley Al Wilson, Al
					Hastings, Tom Marten, Lee Michaels, Geoge Iocolano, and Coach Jim
					Cranfield) got together and formed the Auburn Pulsars. What originally
					started as a marathon training group, the Pulsars grew quickly as
					Auburn&apos;s premier running club.
				</Typography>
				<Typography gutterBottom>
					The group not only represented Auburn in races, but also hosted
					competition from local Cross Country races at Howland Island to
					establishing the largest team relay in the Great Race. Training with
					the pulsars was a unique experience as well. Stories have been shared
					of annual birthay runs on the track where the runners would do as many
					400&apos;s as their age, or having unofficial relay races that last
					for hours.
				</Typography>
				<Typography gutterBottom>
					Since then, the team has seen many competitors come and go. But
					whether it is for pursuing excellence or just joining a fun community
					to run with, the Pulsars have continued to provide Auburn runners a
					place to train and create lasting memories!
				</Typography>
			</Section>
			<Section>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}>
					<Box
						component="img"
						sx={{ margin: "10px" }}
						height="250"
						alt="Pulsars at Boston"
						src="/images/pulsars-at-boston.png"
					/>
					<Box
						component="img"
						sx={{ margin: "10px" }}
						height="250"
						alt="George Iocolano"
						src="/images/george-marathon-run.png"
					/>
					<Box
						component="img"
						sx={{ margin: "10px" }}
						height="250"
						alt="Tom Marten"
						src="/images/marten-marathon-run.png"
					/>
					<Box
						component="img"
						sx={{ margin: "10px" }}
						height="250"
						alt="24hr Marathon"
						src="/images/24hr-marathon.png"
					/>
					<Box
						component="img"
						sx={{ margin: "10px" }}
						height="250"
						alt="Winter Training"
						src="/images/winter-training.png"
					/>
				</Box>
				<Box sx={{ textAlign: "center" }}>
					<Typography
						component="a"
						href="https://flic.kr/s/aHsiNqdt8M"
						rel="noopener noreferrer"
						target="_blank"
						variant="caption">
						*Credit for Photos: Al Hastings
					</Typography>
				</Box>
			</Section>
		</>
	)
}

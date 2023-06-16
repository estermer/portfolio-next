import React from "react"
import Link from "next/Link"
import { Button, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import HeroSection from "../components/HeroSection"
import Section from "../components/Section"
import SamplePost from "../components/SamplePost"
import HorizontalLineContainer from "../components/HorizontalLineContainer"
import { getPosts } from "../lib/post-helpers"

const useStyles = makeStyles(theme => ({
	heroContent: {
		marginBottom: theme.spacing(4),
	},
	verticalCenterContent: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "100%",
	},
}))

export default function Home({ posts }) {
	const classes = useStyles()

	return (
		<>
			<HeroSection>
				<Typography className={classes.heroContent} variant="h2">
					Auburn Pulsars Running Club
				</Typography>
				<div className={classes.heroContent}>
					<HorizontalLineContainer>
						<Typography variant="h5">established 1976</Typography>
					</HorizontalLineContainer>
				</div>
				<Link href="/about" passHref>
					<Button
						className={classes.heroContent}
						color="secondary"
						variant="contained">
						Learn More
					</Button>
				</Link>
			</HeroSection>
			<Section>
				<Container fixed maxWidth="lg">
					<Typography gutterBottom variant="h4">
						Recent News
					</Typography>
					{posts.map(post => (
						<SamplePost key={post.id} {...post} />
					))}
				</Container>
			</Section>
		</>
	)
}

export async function getServerSideProps() {
	const posts = await getPosts()

	return { props: { posts } }
}

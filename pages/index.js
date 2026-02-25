import React from "react"
import Link from "next/link"
import { Box, Button, Container, Typography } from "@mui/material"
import HeroSection from "../components/HeroSection"
import Section from "../components/Section"
import SamplePost from "../components/SamplePost"
import HorizontalLineContainer from "../components/HorizontalLineContainer"
import { getPosts } from "../lib/post-helpers"

export default function Home({ posts }) {
	return (
		<>
			<HeroSection>
				<Typography
					sx={{ marginBottom: (theme) => theme.spacing(4) }}
					variant="h2">
					Auburn Pulsars Running Club
				</Typography>
				<Box sx={{ marginBottom: (theme) => theme.spacing(4) }}>
					<HorizontalLineContainer>
						<Typography variant="h5">established 1976</Typography>
					</HorizontalLineContainer>
				</Box>
				<Button
					component={Link}
					href="/about"
					sx={{ marginBottom: (theme) => theme.spacing(4) }}
					color="secondary"
					variant="contained">
					Learn More
				</Button>
			</HeroSection>
			<Section>
				<Container fixed maxWidth="lg">
					<Typography gutterBottom variant="h4">
						Recent News
					</Typography>
					{posts.map((post) => (
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

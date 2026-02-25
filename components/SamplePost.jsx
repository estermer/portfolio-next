import React from "react"
import Link from "next/link"
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material"
import { MdAccessTime as ClockIcon } from "react-icons/md"
import { getExcerpt, createMarkup, toDateString } from "../lib/post-helpers"

export default function SamplePost({
	excerpt,
	title,
	date,
	slug,
	jetpackFeaturedMediaUrl,
}) {
	return (
		<Card sx={{ minWidth: 275, marginBottom: (theme) => theme.spacing(4) }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					flexWrap: { xs: "wrap", sm: "nowrap" },
					justifyItems: { xs: "center", sm: "space-between" },
				}}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						<ClockIcon /> {toDateString(date)}
					</Typography>
					<Typography
						dangerouslySetInnerHTML={createMarkup(title.rendered)}
						gutterBottom
						variant="h5"
						component="h2"
					/>
					<Typography variant="body2" component="div">
						{getExcerpt(excerpt)}
					</Typography>
				</CardContent>
				<CardMedia
					component="img"
					sx={{
						height: 150,
						width: "auto",
						order: { xs: -1, sm: 0 },
					}}
					src={jetpackFeaturedMediaUrl || "/images/pulsar-logo.png"}
				/>
			</Box>
			<CardActions>
				<Button
					component={Link}
					href={`/news/${slug}`}
					color="secondary"
					size="small">
					Read More
				</Button>
			</CardActions>
		</Card>
	)
}

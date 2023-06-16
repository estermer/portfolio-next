import React from "react"
import Link from "next/Link"
import { makeStyles } from "@material-ui/core/styles"
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core"
import { MdAccessTime as ClockIcon } from "react-icons/md"
import { getExcerpt, createMarkup, toDateString } from "../lib/post-helpers"

const useStyles = makeStyles(theme => ({
	cardActionArea: {
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
			justifyContent: "center",
		},
	},
	card: {
		minWidth: 275,
		marginBottom: theme.spacing(4),
	},
	image: {
		height: 150,
		width: "auto",
		[theme.breakpoints.down("sm")]: {
			order: -1,
		},
	},
	date: {
		fontSize: 14,
	},
}))

export default function SamplePost({
	excerpt,
	title,
	date,
	slug,
	jetpackFeaturedMediaUrl,
}) {
	const classes = useStyles()

	return (
		<Card className={classes.card}>
			<div className={classes.cardActionArea}>
				<CardContent>
					<Typography
						className={classes.date}
						color="textSecondary"
						gutterBottom>
						<ClockIcon /> {toDateString(date)}
					</Typography>
					<Typography
						dangerouslySetInnerHTML={createMarkup(title.rendered)}
						gutterBottom
						variant="h5"
						component="h2"/>
					<Typography variant="body2" component="div">
						{getExcerpt(excerpt)}
					</Typography>
				</CardContent>
				<CardMedia
					component="img"
					className={classes.image}
					src={jetpackFeaturedMediaUrl || "/images/pulsar-logo.png"}/>
			</div>
			<CardActions>
				<Link href={`/news/${slug}`} passHref>
					<Button color="secondary" size="small">
						Read More
					</Button>
				</Link>
			</CardActions>
		</Card>
	)
}

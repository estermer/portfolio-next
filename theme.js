import { createTheme } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			main: "#1565c0",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#e65100",
			contrastText: "#ffffff",
		},
		background: {
			default: "#ffffff",
			dark: "#1a237e",
		},
	},
	typography: {
		fontFamily: "'Open Sans', sans-serif",
		h1: { fontFamily: "'Bree Serif', serif" },
		h2: { fontFamily: "'Bree Serif', serif" },
		h3: { fontFamily: "'Bree Serif', serif" },
		h4: { fontFamily: "'Bree Serif', serif" },
		h5: { fontFamily: "'Bree Serif', serif" },
		h6: { fontFamily: "'Bree Serif', serif" },
	},
})

export default theme


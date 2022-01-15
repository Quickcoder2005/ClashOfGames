import "./lib/react.js";
import "./lib/react-dom.js";
import "./lib/material-ui.js";
import "./lib/popify.js";

const {AppBar, CssBaseline, createTheme, Icon, Typography, Toolbar, ThemeProvider} = MaterialUI;

const theme = createTheme({
    palette: {
        primary: {
            main: "#9f1ec9"
        },
        secondary: {
            main: "#b400fa"
        }
    }
});

function App(){
	return (
		<ThemeProvider theme={theme}>
			<Header/>
		</ThemeProvider>
	);
}

function Header(){
	return (
		<>
			<CssBaseline/>
			<AppBar position="fixed">
				<Toolbar>
					<Icon style={{color: "#fff", fontSize: "32px", marginBottom: "2px"}} className="material-icons"> sports_esports </Icon>
					<Typography style={{color: "#fff", marginLeft: "5px"}} variant="h6"> Clash of Games </Typography>
				</Toolbar>
			</AppBar>
		</>
	);
}

ReactDOM.render(<App/>, document.querySelector("#root"));
import "./lib/react.js";
import "./lib/react-dom.js";
import "./lib/material-ui.js";
import "./lib/popify.js";

const {useState} = React;
const {AppBar, Box, Button, CssBaseline, createTheme, Drawer, Divider, Icon, IconButton, List, ListItem, Typography, Toolbar, ThemeProvider} = MaterialUI;

const theme = createTheme({
    palette: {
        primary: {
            main: "#9f1ec9"
        },
        secondary: {
            main: "#fa609a"
        },
        text: {
        	primary: "#212121",
        	secondary: "#9e9e9e"
        }
    }
});

function App(){
	const [drawerState, setDrawerState] = useState(false);
	const [containerState, setContainerState] = useState("home");

	return (
		<ThemeProvider theme={theme}>
			<Header setDrawerState={setDrawerState}/>
			<Menu drawerState={drawerState} setDrawerState={setDrawerState} setContainerState={setContainerState}/>
			{(containerState === "home") && <Home/>}
			{(containerState === "info") && <Info/>}
			{(containerState === "rules") && <Rules/>}
			{(containerState === "organisers") && <Organisers/>}
			<Footer/>
		</ThemeProvider>
	);
}

function Header(props){
	return (
		<>
			<CssBaseline/>
			<AppBar style={{alignItems: "center"}} position="fixed">
				<Toolbar>
					<Icon style={{marginBottom: "2px"}} className="material-icons" fontSize="large"> sports_esports </Icon>
					<Typography style={{marginLeft: "5px"}} variant="h6"> Clash of Games </Typography>
					<Icon style={{marginLeft: "4px", marginBottom: "2px"}} className="material-icons" fontSize="large"> sports_esports </Icon>
				</Toolbar>
				<Box position="absolute" left={8} top={3}>
					<IconButton style={{fontSize: "32px", color: "#fff"}} className="material-icons" onClick={() => props.setDrawerState(true)}> menu </IconButton>
				</Box>
			</AppBar>
		</>
	);
}

function Menu(props){
	return (
		<Drawer open={props.drawerState} onClose={() => props.setDrawerState(false)} anchor="left">
			<List>
				<Box display="flex" alignItems="center" justifyContent="center">
                	<ListItem>
                    	<img src="../public/icon.png" width="175" height="150"/>
                	</ListItem>
                </Box>
                <Divider/>
				<ListItem>
					<Icon style={{color: "#fa609a"}} className="material-icons"> home </Icon>
					<Button onClick={() => props.setContainerState("home")}> Home </Button>
				</ListItem>
				<Divider/>
				<ListItem>
					<Icon style={{color: "#fa609a"}} className="material-icons"> info </Icon>
					<Button onClick={() => props.setContainerState("info")}> General Info </Button>
				</ListItem>
				<Divider/>
				<ListItem>
					<Icon style={{color: "#fa609a"}} className="material-icons"> quiz </Icon>
					<Button onClick={() => props.setContainerState("rules")}> Rules </Button>
				</ListItem>
				<Divider/>
				<ListItem>
					<Icon style={{color: "#fa609a"}} className="material-icons"> groups </Icon>
					<Button onClick={() => props.setContainerState("organisers")}> Organisers </Button>
				</ListItem>
				<Divider/>
                <Box position="absolute" left={120}>
                    <ListItem>
                        <IconButton style={{color: "#fa609a"}} className="material-icons" size="large" onClick={() => props.setDrawerState(false)}> arrow_circle_left </IconButton>
                    </ListItem>
                </Box>
			</List>
		</Drawer>
	);
}

function Home(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h4" color="textPrimary" align="center"> Lorem Ipsum </Typography>
            <Box marginTop={2}>
                <Typography variant="h5" color="textPrimary" align="center" paragraph>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut gravida felis. Curabitur in metus sed turpis finibus porta quis nec risus. Donec nec mattis dui. Fusce volutpat elit eu nibh rutrum, eu dictum nulla aliquet. Vestibulum tempus rutrum augue, nec maximus enim elementum ac. Vestibulum sed enim ut erat dignissim posuere eu id sapien. Phasellus tempor placerat sodales. Vivamus congue ligula et consequat lacinia. Donec vel magna tristique risus convallis semper quis maximus diam. Nullam faucibus luctus quam. Aliquam erat volutpat. Duis interdum at ante a blandit. Sed consequat vulputate ex, ut mattis lacus efficitur a.
                </Typography>
            </Box>
        </Box>
    );
}

function Info(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h4" color="textPrimary" align="center"> Lorem Ipsum </Typography>
            <Box marginTop={2}>
                <Typography variant="h5" color="textPrimary" align="center" paragraph>
                     Sed in pulvinar risus, vel finibus purus. Vivamus mollis neque sit amet nunc commodo, consequat consectetur ante dictum. Nam interdum ut felis vel interdum. Morbi scelerisque auctor eros eget mollis. Etiam ac felis vel risus tincidunt tristique. Ut ante lacus, malesuada eu faucibus vitae, sagittis vel neque. Nulla facilisi. Quisque aliquet turpis arcu, in congue arcu suscipit ut. Nullam in orci sed dui tincidunt viverra. Ut efficitur, sem et auctor pretium, diam leo placerat felis, id rhoncus velit nisl ut diam. Pellentesque a commodo dolor. Sed mi dolor, aliquet ac ante ut, hendrerit condimentum ex. Phasellus at mi sed mauris dictum sodales sit amet et libero. Nullam molestie faucibus arcu id pharetra. Morbi malesuada pulvinar tellus, non suscipit arcu convallis consectetur.
                </Typography>
            </Box>
        </Box>
    );
}

function Rules(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h4" color="textPrimary" align="center"> Lorem Ipsum </Typography>
            <Box marginTop={2}>
                <Typography variant="h5" color="textPrimary" align="center" paragraph>
                     Proin in risus ipsum. Proin in euismod justo. Mauris tristique arcu sit amet nisl sollicitudin, ullamcorper scelerisque arcu vestibulum. Nulla non dui nec risus porttitor egestas. Praesent facilisis tristique dignissim. Vivamus varius dolor eu dolor euismod ullamcorper. Ut id eros id mi rutrum egestas. Ut condimentum sem ac elit ornare, nec volutpat eros dignissim. Morbi eu pulvinar est. Pellentesque ultricies, ante in tempus pulvinar, sapien lectus egestas elit, et auctor ligula justo sed justo. Ut felis sapien, imperdiet at augue nec, faucibus dictum ex. Sed porttitor dolor commodo turpis eleifend, ultrices eleifend risus fermentum.
                </Typography>
            </Box>
        </Box>
    );
}

function Organisers(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h4" color="textPrimary" align="center"> Lorem Ipsum </Typography>
            <Box marginTop={2}>
                <Typography variant="h5" color="textPrimary" align="center" paragraph>
                     Mauris dignissim risus porta, convallis diam a, pharetra neque. Etiam interdum iaculis purus, tristique commodo odio. Proin sit amet volutpat ante. Suspendisse pharetra, est non ornare feugiat, ex tortor mattis quam, eget tincidunt arcu nisl in elit. Nunc ac diam neque. Phasellus tempus, neque et dapibus pharetra, ligula eros rutrum sem, imperdiet convallis nulla libero sit amet arcu. Vivamus volutpat est sapien, at aliquam ipsum porttitor suscipit. Morbi congue ante metus, in semper metus efficitur sit amet. Pellentesque malesuada, est id tristique iaculis, tellus enim maximus sem, sed euismod libero augue ut erat. Ut sed nunc sit amet elit commodo pellentesque. Morbi volutpat velit nec dui ultricies accumsan dictum a dui. Suspendisse potenti. Duis non posuere massa. Sed malesuada finibus metus, vel iaculis est auctor nec. Ut et enim arcu. Nullam mi lectus, ullamcorper non dolor tincidunt, pharetra interdum est.
                </Typography>
            </Box>
        </Box>
    );
}

function Footer(){
    return (
        <Box marginTop={1} marginBottom={1} marginLeft={1} marginRight={1}>
            <Typography style={{fontSize: "18px"}} variant="h6" color="textSecondary" align="center"><Icon className="material-icons"> copyright </Icon> 2022 Clash of Games. All Rights Reserved. </Typography>
        </Box>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));

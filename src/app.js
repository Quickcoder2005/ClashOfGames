import "./lib/react.js";
import "./lib/react-dom.js";
import "./lib/material-ui.js";
import "./lib/popify.js";

const {useState, useRef} = React;
const {AppBar, Box, Button, CssBaseline, createTheme, Drawer, Divider, Icon, IconButton, List, ListItem, Paper, Typography, Toolbar, ThemeProvider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} = MaterialUI;

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
        	secondary: "#f9f9f9"
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
				<ListItem>
					<Typography style={{color: theme.palette.secondary.main}} variant="h6"> Clash of Games </Typography>
				</ListItem>
                <Divider/>
				<ListItem>
					<Icon style={{color: theme.palette.secondary.main}} className="material-icons"> home </Icon>
					<Button onClick={() => props.setContainerState("home")}> Home </Button>
				</ListItem>
				<ListItem>
					<Icon style={{color: theme.palette.secondary.main}} className="material-icons"> info </Icon>
					<Button onClick={() => props.setContainerState("info")}> General Information </Button>
				</ListItem>
				<ListItem>
					<Icon style={{color: theme.palette.secondary.main}} className="material-icons"> quiz </Icon>
					<Button onClick={() => props.setContainerState("rules")}> Rules & Regulations </Button>
				</ListItem>
				<ListItem>
					<Icon style={{color: theme.palette.secondary.main}} className="material-icons"> groups </Icon>
					<Button onClick={() => props.setContainerState("organisers")}> About the Organisers </Button>
				</ListItem>
				<Divider/>
                <Box position="absolute" left={160}>
                    <ListItem>
                        <IconButton style={{color: theme.palette.secondary.main}} className="material-icons" size="large" onClick={() => props.setDrawerState(false)}> arrow_circle_left </IconButton>
                    </ListItem>
                </Box>
			</List>
		</Drawer>
	);
}

function Home(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h5" align="center"> Rounds </Typography>
            <Box marginTop={1}>
            	<RoundTable/>
        	</Box>
        </Box>
    );
}

function RoundTable(){
	const rows = useRef([
		createData("1", "Alien", 13241),
		createData("2", "Animal", 34534),
		createData("3", "Tiger", 12443)
	]);

	function createData(round, participants, scoring){
	 	return {round, participants, scoring};
	}

	return (
    	<TableContainer component={Paper}>
     		<Table>
	        	<TableHead>
	          		<TableRow>
	            		<TableCell> Round </TableCell>
	            		<TableCell align="right"> Participants</TableCell>
	            		<TableCell align="right"> Scoring </TableCell>
	          		</TableRow>
	        	</TableHead>
		        <TableBody>
		        	{rows.current.map((row) => (
		            	<TableRow key={row.round}>
		              		<TableCell component="th" scope="row"> {row.round} </TableCell>
		              		<TableCell align="right"> {row.participants} </TableCell>
		              		<TableCell align="right"> {row.scoring} </TableCell>
		            	</TableRow>
		          	))}
		        </TableBody>
      		</Table>
    	</TableContainer>
  	);
}

function Info(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h5"> General Information </Typography>
            <Box marginTop={2}>
                <Typography style={{wordBreak: "break-word"}} variant="body1" paragraph>
                	There will be 5 rounds. In the first round all except 8 best submits are eliminated. Each following round half of participants is eliminated. Participants eliminated in the second last round continue playing for the third place. 
               	</Typography>
               	<Typography style={{wordBreak: "break-word"}} variant="body1" paragraph>
                	Each round lasts exactly 1 week starting on Monday. Organizers vote for round theme which is announced Monday 8:00. Since then participants can submit in form of Sololearn codes till Friday 24:00. Submits after deadline or in different forms are invalid. Results are announced Sunday 12:00.
				</Typography>
            </Box>
        </Box>
    );
}

function Rules(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h5"> Rules & Regulations </Typography>
            <Box marginTop={2}>
                <Typography style={{wordBreak: "break-word"}} variant="body1" paragraph>
                	Rules to be followed: 
               	</Typography>
            </Box>
        </Box>
    );
}

function Organisers(){
    return (
        <Box marginTop={10} marginLeft={5} marginRight={5}>
            <Typography variant="h5"> About the Organisers </Typography>
            <Box marginTop={2}>
                <Typography style={{wordBreak: "break-word"}} variant="body1" paragraph>
                	About the organisers...
               	</Typography>
            </Box>
        </Box>
    );
}

function Footer(){
    return (
        <Box width="100%" position="fixed" left="0px" bottom="0px">
            <Typography style={{backgroundColor: theme.palette.primary.main}} variant="subtitle2" color="textSecondary" align="center"><Icon className="material-icons" fontSize="small"> copyright </Icon> 2022 Clash of Games. All Rights Reserved. </Typography>
        </Box>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));

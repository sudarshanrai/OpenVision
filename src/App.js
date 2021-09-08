import './App.css';
import {Button, Container, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import UploadFile from './components/UploadFile'

function App() {
  return (
  <Container style={{paddingTop: "50px"}} >
  <Grid container spacing={3} justifyContent="center" alignContent="center">
      <Grid item xs={12}>
          <Typography variant="h5" align="center">Open Vision API</Typography>
      </Grid>
      <Grid item xs={12}>
         <UploadFile/>
      </Grid>
  </Grid>
  </Container>
  );
}

export default App;

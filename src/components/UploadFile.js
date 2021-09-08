import React , {Component}from 'react';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import axios, { post } from 'axios';
import Alert from '@material-ui/lab/Alert';

class UploadFile extends Component {
 state = {
    selectedFile: null,
    isUploading: false,
    isError: false,
    onSuccess: false,
    responseData: null,
    errorData: null
};
onFileChange = e => {
    this.setState({ selectedFile: e.target.files[0]});
}

onFileUpload = () => {
    var formData = new FormData();
    formData.append("model", "yolov4");
    formData.append("image", this.state.selectedFile);

    const requestData = {
        method: 'POST',
        body: formData
    }
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

/*     fetch("https://cors.bridged.cc/https://api.openvisionapi.com/api/v1/detection", requestData)
        .then(response =>  { 
            this.setState({onSuccess: true, responseData: response});
        })
        .catch(error => {
            this.setState({isError: true, errorData: error.toString()});
        });
     */
    const data = { model:  "yolov4",  }
    /* axios.post("https://cors.bridged.cc/https://api.openvisionapi.com/api/v1/detection", data)
         .then(response =>  { 
            this.setState({onSuccess: true, responseData: response});
          })
        .catch(error => {
            this.setState({isError: true, errorData: error.toString()});
        }); */
    post("https://cors.bridged.cc/https://api.openvisionapi.com/api/v1/detection", formData, config)
    .then(response =>  { 
        this.setState({onSuccess: true, responseData: response});
      })
    .catch(error => {
        this.setState({isError: true, errorData: error.toString()});
    });
}
  render()
 {
    return (
     <div>
        {!this.state.onSuccess && <>
        <Typography variant="0" align="center">Please upload a Image</Typography>
        <form>
          <input
            onChange={this.onFileChange}
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
        <Button variant="contained" color="primary" onClick={this.onFileUpload}>
            Submit
        </Button>
        </form>
        {this.state.isError && <Alert severity="error" variant="outlined">{this.state.errorData}</Alert>}</>}
        {this.state.onSuccess && <><Typography variant="0" align="center">Detected objects: </Typography>
            {this.state.responseData.data.predictions.map(tag => ( 
            <>
            <p>label: {tag.label}, score: {tag.score}</p>
            </>
            ))}
            </>
        }
        </div>
      );
 }  
}
export default UploadFile;


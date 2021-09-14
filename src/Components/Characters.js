import React from "react";
import CharacterInfo from "./CharactersInfo";
import {BottomScrollListener} from "react-bottom-scroll-listener";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBack";
import LinearProgress from "@material-ui/core/LinearProgress";


class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      range: 0
    };
    this.appendComponents = this.appendComponents.bind(this);
  }
  componentWillMount() {
    if (this.props.location.url) {
      localStorage.setItem("url", this.props.location.url);
    }
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.response).characters;
        this.setState({ data });
      }
    };
    request.open("GET", localStorage.getItem("url"), true);
    request.send();
  }
  
  appendComponents() {
    this.setState({ range: this.state.range + 20 });
  }
  render() {
    if (this.state.data != null) {
      return (
        <div>
          <div className="ui fixed menu">
            <IconButton
              color="inherit"
          
              onClick={() => {
              window.history.back();
              }}>
              <BackIcon fontSize="large"  />
            </IconButton>
            <div className = "ui container center">
              <h2>Characters</h2>
            </div>
          </div>
          <div className = "ui grid container">
            {this.state.data.slice(0, this.state.range + 20).map(x => (
              <CharacterInfo key={x} data={x} />
            ))}
          </div>
          <BottomScrollListener onBottom={this.appendComponents} />
        </div>

      );
    }else{
        return(
          <div >
            <LinearProgress color="primary"/>
          </div>
        )
    }
  }
}

export default Character;

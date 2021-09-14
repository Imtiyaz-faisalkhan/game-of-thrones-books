import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4)
        if (request.status === 200) {
          let CharacterInfo = JSON.parse(request.response);
          this.setState({ data: CharacterInfo });
        }
    };
    request.open("GET", this.props.data, true);
    request.send();
  }
  
  render() {

    if (this.state.data) {
      let name=this.state.data.name === ""?"No name":this.state.data.name;
      let tvSeries = this.state.data.tvSeries[0]=== ""?"No Info":this.state.data.tvSeries.join("-");
      return (
        
        <div className="four wide column">
          <div className = "ui cards">
            <div className="card">
              <div className = "content">
                <div className = "header">{name}</div> 
                <div className = "metaname">{this.state.data.gender}</div>
                <div className = "meta">{tvSeries}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div >
         <LinearProgress color="secondary"/>
        </div>
      )
    }
  }
}

export default CharacterInfo;

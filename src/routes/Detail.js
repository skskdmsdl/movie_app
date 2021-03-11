import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount(){
        console.log(this.props);
        const { location, history } = this.props;
        console.log(location.state);
        // 클릭하지 않고 url을 통해서 이동하려고 하면 홈으로 이동
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
          return (
            <div className="about__container">
              <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
              <br></br>
              <span>{location.state.title} </span>
              <span>({location.state.genres}) - </span>
              <span>{location.state.year}</span>
              <div>{location.state.summary}</div>
              
            </div>
          );
        } else {
          return null;
        }
    }
}
export default Detail;

import React from "react";

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
          return <span>{location.state.title}</span>;
        } else {
          return null;
        }
    }
}
export default Detail;
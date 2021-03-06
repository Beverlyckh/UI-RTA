import React, { Component } from "react";
import Waypoint from "./Waypoint.js";

class Route extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var waypoints = this.props.waypoints;
    var route = [];
    var from = this.props.from;
    var to = this.props.to;

    

    var routeStyle = {
      overflow: "scroll",
      backgroundColor: "rgba(225, 225, 225, 0.43)",
      width: "100%",
      marginLeft: 0,
      marginTop: 0,
      position: "relative",
      
    };

    //add locations to the waypoints array before printing it out
    route.push(
      <div>
        <Waypoint
          key={0}
          waypoint={"Start Destination: " + from}
          color="#fe3c52"
          showButton={false}
        />
        <br />
      </div>
    );
    for (var i = 0; i < waypoints.length; i++) {
      route.push(
        <div>
          <Waypoint
            key={i + 1}
            waypoint={waypoints[i].waypointName}
            color="#fe3c52"
            showButton={true}
            handleClick={this.props.handleClick}
          />
          <br />
        </div>
      );
    }

    route.push(
      <div>
        <Waypoint
          key={waypoints.length + 1}
          waypoint={"End Destination: " + to}
          color="#fe3c52"
          showButton={false}
        />
        <br />
      </div>
    );

    return <div style={routeStyle}>{route}</div>;
    // return <div >{route}</div>;
  }
}

export default Route;

import React, { Component } from "react";
import Widecard from "../components/Widecard";
import { collegeData } from "../components/colleges";
class Education extends Component {
  constructor() {
    super()
    this.state = {
      collegeData: collegeData
    }
  }

  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic"> My Education </h1>
        { this.state.collegeData.map((data) => {
          return (
            <Widecard key={data.id}
              data={data}
            />
          )}
        )}
      </div>
    );
  }
}
export default Education;

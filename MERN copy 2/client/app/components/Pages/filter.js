import React, { Component } from "react";
// import "./App.css";
import Select from "react-select";
import { Button } from "react-bootstrap";
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.state = {
      selected: []
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(selection) {
    console.log(selection);
    this.props.onChange(selection);

    const { selected } = this.state;
    selected.push(selection);
    this.setState({
      selected
    });
  }

  render() {
    const placeholder = this.props.placeholder;
    if (this.props.choices) {
      const options = this.props.choices;
      console.log("LE CHOOIX ", options);
      return (
        <div className="filterStyle">
          {/* <h1>Count={this.state.selected.length}</h1> */}
          <Select
            options={options}
            value={this.state.selected}
            placeholder={placeholder}
            isMulti
            isClearable
            isSearchable
            onChange={this.handleOnSelect}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Filter;

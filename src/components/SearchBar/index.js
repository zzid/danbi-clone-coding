import React from "react";
import "./SearchBar.scss";
class SearchBar extends React.Component {
  state = {
    searchString: "",
  };

  onChangeSearchString = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({ searchString: value });
  };
  onSearchStringSubmit = (event) => {
    event.preventDefault();
    console.log("submit : ", this.state.searchString);
    alert(`submit : ${this.state.searchString}`);
    this.setState({ searchString: "" });
  };
  render() {
    const { searchString } = this.state;
    return (
      <div className={"search-bar-container"}>
        <form onSubmit={this.onSearchStringSubmit}>
          <input
            className={"text-input"}
            type="text"
            placeholder={this.props.placeHolder}
            value={searchString}
            onChange={this.onChangeSearchString}
          />
          <input value="검색" type="submit" className="submit-btn" />
        </form>
      </div>
    );
  }
}
export default SearchBar;

import React from "react";
import "./YearMonthPicker.scss";

class YearMonthPicker extends React.Component {
  state = {
    curYear: 2020,
    curMonth: 12,
  };
  onClickPrev = () => {
    if (this.state.curMonth - 1 <= 0) {
      this.setState((prev) => ({
        curYear: prev.curYear - 1,
        curMonth: 12,
      }));
    } else {
      this.setState((prev) => ({
        curMonth: prev.curMonth - 1,
      }));
    }
  };
  onClickNext = () => {
    if (this.state.curMonth + 1 >= 12) {
      this.setState((prev) => ({
        curYear: prev.curYear + 1,
        curMonth: 1,
      }));
    } else {
      this.setState((prev) => ({
        curMonth: prev.curMonth + 1,
      }));
    }
  };
  render() {
    const { curYear, curMonth } = this.state;
    return (
      <div className={"calendar-selector"}>
        <span className={"prev calendar-btn"} onClick={this.onClickPrev}>
          {"<"}
        </span>
        <span>
          <button>{`${curYear}.${curMonth}`}</button>
        </span>
        <span className={"next calendar-btn"} onClick={this.onClickNext}>
          {">"}
        </span>
      </div>
    );
  }
}

export default YearMonthPicker;

import React, { Component } from "react";
import styles from "./usertabs.module.css";

class UserTabs_Tabs extends Component {
  state = {
    selected: this.props.selected || 0,
  };

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <>
        <ul className={styles.tab_ul}>
          {this.props.children.map((elem, index) => {
            let style = index === this.state.selected ? "selected" : "";
            return (
              <div className={styles.tab_li_wrapper}>
                <li
                  key={index}
                  className={styles.tab_li}
                  onClick={() => this.handleChange(index)}
                >
                  {elem.props.title}
                </li>
              </div>
            );
          })}
        </ul>
        <div className={styles.tab}>
          {this.props.children[this.state.selected]}
        </div>
      </>
    );
  }
}

export default UserTabs_Tabs;

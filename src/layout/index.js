import { Component } from "react";
import { Header } from "../components/Header";

export class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
      </>
    );
  }
}

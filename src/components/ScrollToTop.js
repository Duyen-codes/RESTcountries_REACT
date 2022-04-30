import React, { Component } from "react";

class ScrollToTop extends Component {
  state = { is_visible: false };
  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({ is_visible: true });
    } else {
      this.setState({ is_visible: false });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      this.state.is_visible && (
        <button className="to-top-btn" onClick={this.scrollToTop}>
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      )
    );
  }
}

export default ScrollToTop;

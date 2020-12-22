import React from "react";
import { connect } from "react-redux";
// 368 creating a modal
import Modal from "../Modal";
// 372 reconfigure the Modal components
import history from "../../history";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      // use React.Fragment to return multiple elements without its presence inside of DOM
      // we could also use the empty tag '<> </>' but this could cause some tooling errors
      // or might been seen as invalid by some code quality checkers
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  // 375 conditionally display the information of the stream to be deleted
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream:";
    }

    return `Are you sure you want to delete the stream: ${this.props.stream.title} ?`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

// 375 Conditionally display the stream details
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamDelete);

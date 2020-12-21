import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

// 363 Avoiding changes to Properties
import _ from "lodash";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // 363
  onSubmit = (formValues) => {
    // 365 call the action creator
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

// 363
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);

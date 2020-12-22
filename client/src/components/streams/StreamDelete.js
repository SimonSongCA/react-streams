import React from "react";
// 368 creating a modal
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    // use React.Fragment to return multiple elements without its presence inside of DOM
    // we could also use the empty tag '<> </>' but this could cause some tooling errors
    // or might been seen as invalid by some code quality checkers
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  // return <div>StreamDelete</div>
  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;

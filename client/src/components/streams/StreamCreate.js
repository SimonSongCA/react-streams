import React from "react";

// import redux form. reduxForm is a function that has the exact same function
// as the connect() function
import { Field, reduxForm } from "redux-form";

//
import { createStream } from "../../actions";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //   renderInput(formProps) {
  // console.log(formProps);

  // Three ways to hook up the form:

  // 1
  // return (
  //   <input
  //     onChange={formProps.input.onChange}
  //     value={formProps.input.value}
  //   ></input>
  // );

  // 2
  // return <input {...formProps.input} />;

  // 3
  // we can do the destructure over here.
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

// hook redux form up.
// the reduxForm function receives a single object
// export default reduxForm({
//   form: "streamCreate",
//   validate,
// })(StreamCreate);

// we replaced the code above to wire up the connect() function
const formWrapped = reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);

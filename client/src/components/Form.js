import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.fetchusers();
    }
}

componentDidMount() {
    axios.get(`http://localhost:5000/api/restricted/data`)
      .then(response => {
        const users = response.data;
        this.setState({ users });
      })
  }

  
  render() {
    console.log(this.state.users);
    return (
      <div className="user-form">
        <h1>User Form</h1>
        <Form>
          {/* username input  */}
          <div className="input">
            <h3 className="header">username: </h3>
            <Field type="text" name="name" placeholder="username" />*
            {this.props.touched.name && this.props.errors.name && (
              <p>{this.props.errors.name}</p>
            )}
          </div>

          {/* // password input  */}
          <div className="input">
            <h3 className="header">password: </h3>
            <Field type="password" name="password" placeholder="password" />*
            {this.props.touched.password && this.props.errors.password && (
              <p>{this.props.errors.password}</p>
            )}
          </div>

          {/* // submit button  */}
          <button className="button" type="submit">
            Submit!
          </button>
        </Form>

        {this.state.users.map(user => (
          <div className="displayuser" key={user.name}>
            <div className="info"> Name: {user.name} </div>
            <div className="info">Password: {user.password}</div>
          </div>
        ))}
      </div>
    );
  }
}

// Higher Order Component - returns copy of UserForm but w/ extended logic
const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      password: values.password || ""
    };
  },

  // Yup form validation
  // these give you the error props you need to apply under each corresponding <Field> input
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string()
      .min(6)
      .required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("http://localhost:5000/api/register", values)
      .then(response => {
        console.log(response);
        setStatus(response);
      })
      .catch(error => console.log(error.response));
    resetForm(); // form reset on submit
  }
})(UserForm); // currying functions in Javascript

export default FormikUserForm;

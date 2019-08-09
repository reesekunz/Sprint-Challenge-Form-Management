import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const UserForm = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (props.status) {
      setUsers([...users, props.status]);
    }
  }, [props.status]);

  return (
    <div className="user-form">
      <h1>User Form</h1>
      <Form>
        {/* // Username Input  */}
        <div className="input">
          <h3 className="header">Username: </h3>
          <Field type="text" name="name" placeholder="Name" />*
          {props.touched.name && props.errors.name && (
            <p>{props.errors.name}</p>
          )}
        </div>

        {/* // Password Input  */}
        <div className="input">
          <h3 className="header">Password: </h3>
          <Field type="password" name="password" placeholder="Password" />*
          {props.touched.password && props.errors.password && (
            <p>{props.errors.password}</p>
          )}
        </div>

        {/* // Submit Button  */}
        <button className="button" type="submit">
          {" "}
          Submit!
        </button>
      </Form>

      {/* Mapping each user and displaying their submitted info  */}
      {users.map(user => (
        <div className="displayuser" key={user.id}>
          <div className="info"> Name: {user.name} </div>
          <div className="info">Password: {user.password}</div>
        </div>
      ))}
    </div>
  );
};

// Higher Order Component - HOC
// Returns a new component (copy of UserForm but with extended logic)

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      password: values.password || ""
    };
  },

  // Yup form validation
  validationSchema: Yup.object().shape({
    // take every input you want to validate and give each value rules
    name: Yup.string().required(),
    password: Yup.string()
      .min(6)
      .required()
    // these give you the error props you need to apply under the each <Field> input in userForm
  }),

  // get setStatus
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("http://localhost:5000/api/register", values, {
        body: { username: "Your name", password: "password" }
      })
      .then(response => {
        console.log(response);
        // call setStatus and pass in object you want to add to state
        setStatus(response.data);
      })
      .catch(error => console.log(error.response));
    resetForm();
  }
})(UserForm); // currying functions in Javascript

export default FormikUserForm;

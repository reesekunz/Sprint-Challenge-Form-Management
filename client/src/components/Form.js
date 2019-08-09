import React from "react";
import axios from "axios";
import {Form, Field, withFormik} from 'formik';
// import * as Yup from 'yup';

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div className="user-form">
        <h1>User Form</h1>
        <Form>
          {/* username input  */}
          <div className="input">
            <h3 className="header">username: </h3>
            <Field type="text" name="username" placeholder="username" />*
            {/* {props.touched.username && props.errors.username && (
              <p>{props.errors.username}</p>
            )} */}
            </div>

        {/* // password input  */}
        <div className="input">
        <h3 className="header">Password: </h3>
        <Field type="password" name="password" placeholder="password" />*
        {/* {props.touched.password && props.errors.password && (
          <p>{props.errors.password}</p>
        )} */}
        </div>

         {/* // submit button  */}
         <button className="button" type="submit"> Submit!</button>

        </Form>
      </div>
    );
  }
}

export default UserForm;

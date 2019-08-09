import React from 'react';

import axios from 'axios';

class GetData extends React.Component {
    constructor() {
      super();
      this.state = {
        users: [ ],
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
          console.log(this.state)
        return (
          <ul>
            { this.state.users.map(user => 
            <div className="recipe">
            <div className="meal">Meal: {user.name}</div>
            <div className="course">Course: {user.course}</div>
            <div className="technique">Technique: {user.technique}</div>
            <div className="ingredients">Ingredients: {user.ingredients}</div>
            
            </div>

            )}
          </ul>
        )
      }
    }
      


export default GetData;
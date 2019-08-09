import React from "react";

import axios from "axios";

class GetData extends React.Component {
  constructor() {
    super();
    this.state = {
      meals: []
    };
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.meal !== this.state.meal) {
  //       this.fetchMeals();
  //     }
  //   }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/restricted/data`).then(response => {
      const meals = response.data;
      this.setState({ meals });
    });
  }

  render() {
    console.log(this.state);
    console.log(this.state.meals);

    return (
      <div className="foods">
        {this.state.meals.map(meal => (
          <div className="recipe" key={meal.name}>
            <div className="meal-name">{meal.name}</div>
            <div className="meal">Course: {meal.course}</div>
            <div className="meal">Technique: {meal.technique}</div>
            <div className="ingredients">Ingredients: {meal.ingredients[0]}
            {meal.ingredients[1]} {meal.ingredients[2]}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default GetData;

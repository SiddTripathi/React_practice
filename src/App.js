//useState allows us to manage states in class based components.

import React, { Component } from 'react';
// import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'P101', name: 'Max', age: 28 },
      { id: 'P102', name: 'Manu', age: 29 },
      { id: 'P103', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   })
  // }
  toggleNameHandler = () => {

    const state = this.state.showPersons
    this.setState({ showPersons: !state }) //state will always be set opposite to current state

  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons --> this is creating a persons reference to original state data. By this 
    //we are mutating the original data. 
    const persons = [...this.state.persons];//using spread operator is the appropriate way here. This will convert persons
    // into an array instead of reference to original state and mutating original data
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({ persons: persons })




    // console.log(persons[index])
    // persons[index].name = "Haritha"
    // this.setState({ persons: persons })

  }

  render() {

    let person = null;
    if (this.state.showPersons === true) {
      person = (<div>
        <h1>This is correct</h1>
        <p>This is rendered through if else cond and JS. Always remeber that react components are Java script. Every thing inside render
        is executed when components are re-rendered.
  </p>
      </div>)
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className="name-change-button" onClick={this.toggleNameHandler}>Switch Name</button>
        {this.state.showPersons ?
          <div>
            {this.state.persons.map((person, index) => {
              return <Person click={this.deletePersonHandler.bind(this, index)} name={person.name} age={person.age}

                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              // buttonClick={this.nameChangedHandler.bind(this, person.name, person.id)} 
              />
            })}

          </div> : null}
        {person}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;



/*Comments
1. Name change is handled for Manu only so only Manu can be edited

2. Line 52 -- The if else cannot be passed here so ternary operator is used cond ?if true : else

3. Line 48 -- Another way to pass conditional blocks is to pass it has JS function in render before return. Refer above code.

4. line 65 --  map keyword is like a for loop which iterates an array or list and returns each element.
*/



import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    color: 'red',
                    smell: 'bad',
                    taste: 'salt'
                },

                {
                    plants: 'rose',
                    grass: 'bermuda',
                    trees: 'pecan'
                },
                {
                    food: 'apple',
                    flavor: 'sour',
                    candy: 'snickers'
                }],
            userInput: '',
            filteredArray: []
        }

        this.splitStuff = this.splitStuff.bind(this)
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    splitStuff(prop) {
        let employees = this.state.unFilteredArray
        let filteredArray = []

        for(let i = 0; i < employees.length; i++) {
            if(employees[i].hasOwnProperty(prop)) {
                filteredArray.push(employees[i])
            }
        }
        this.setState({filteredArray: filteredArray})
    } 

    


    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.splitStuff(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered:{JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
        )
    }
}
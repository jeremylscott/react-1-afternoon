import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: ['jack','jill','tina','addie','ander','jeremy'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterMe(userInput) {
        let filteredArray = []
        let kids = this.state.unFilteredArray
        for(let i = 0; i < kids.length; i++) {
            if(kids[i].includes(userInput)) {
                filteredArray.push(kids[i])
            }
        }
        this.setState({filteredArray: filteredArray})
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.names,null,10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterMe(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray,null,10)}</span>
            </div>
            
        )
    } 
}
import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    letsFilter(userInput) {
       let forwards = userInput
       let backwards = userInput

       backwards = backwards.split('')
       backwards = backwards.reverse()
       backwards = backwards.join('')

       if(forwards === backwards) {
           this.setState({palindrome: 'true'})
       }
       else {
           this.setState({palindrome: 'false'})
       }
    }

    render() {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrom</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.letsFilter(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrom: {this.state.palindrome}</span>  
            </div>
        )
    }
}
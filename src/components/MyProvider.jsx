import React, { Component } from 'react'
import MyContext from './MyContext'

class MyProvider extends Component {
    state = {
        counters: [{id: 1, value: 0},{id: 2, value: 0},{id: 3, value: 0},{id: 4, value: 0}]
    }
  render() {
    return (
        <MyContext.Provider value = {{
            counters : this.state.counters,
            incrementCount: childCountObj => {
                const localCounters = [...this.state.counters]
                const locationOfChild = localCounters.indexOf(childCountObj)
                localCounters[locationOfChild] = {...childCountObj}
                localCounters[locationOfChild].value++
                this.setState({
                    counters: localCounters
                })
            },
            decrementCount: childCountObj =>{
                const localCounters = [...this.state.counters]
                const locationOfChild = localCounters.indexOf(childCountObj)
                localCounters[locationOfChild] = {...childCountObj}
                localCounters[locationOfChild].value--
                this.setState({
                    counters: localCounters
                })
            },
            resetCount : () =>{
                const altered = this.state.counters.map((counterObj)=>{
                    counterObj.value = 0
                    return counterObj
                })
                this.setState({
                    counters: altered
                })
            },
            deleteCounter : childCountObj => {
                const counters = [...this.state.counters]
                const alteredCounters = counters.filter((countObj)=>{
                    return (countObj.id!==childCountObj.id)
                })
                this.setState({
                    counters: alteredCounters
                })
            }
        }}>
            {this.props.children}

        </MyContext.Provider>
    )
  }
}

export default MyProvider
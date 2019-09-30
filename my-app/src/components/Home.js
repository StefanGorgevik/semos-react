import React from 'react'

class Home extends React.Component {
    constructor (/*props*/) {
        super(/*props*/)
        /*Initial State*/ 
        this.state = {
            show: false
        }
    }

    showOrHide = (event) => {
        console.log(event.target)
        console.log(event.target.id)
        // if (!this.state.show) {
        //     this.setState({show:true})
        // } else {
        //     this.setState({show:false})
        // }
        this.setState({ show: !this.state.show })
    }

    /* Render Metod*/ 
    render () {
        // najnovite state i props

        // let div = <div>Hello Semos!</div>

        // if(!this.state.show) {
        //     div = null
        // }

        return (
            <React.Fragment>
                <button id='toggle'onClick={this.showOrHide} >Toggle me</button>
                {this.state.show ? <div>Hello Semos!</div> : null}
            </React.Fragment>
        )
    }
}

export default Home
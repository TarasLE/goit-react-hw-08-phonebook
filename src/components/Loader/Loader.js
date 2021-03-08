import React, { Component } from 'react'
import Spinner from 'react-loader-spinner'

export default class Loader extends Component {
    render() {
        return (
            <div>
                <Spinner
                    type="ThreeDots"
                    color="#ff3b0f"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
        <div className="col-md-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h3>{ this.props.title }</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                    { this.props.priority }
                    </span>
                </div>
                <div className="card-body">
                    <p>{ this.props.description }</p>
                </div>
                <div className="card-footer">
                    <p>{ this.props.responsible }</p>
                </div>
            </div>
        </div>
        )
    }
}

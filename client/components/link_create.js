/**
 * Created by Scott on 6/27/2016.
 */
import React, { Component } from 'react';

//Form for the user to insert a valid URL to be shortened
//Error handling for non-valid URLs
class LinkCreate extends Component {
    constructor(props) {
        super(props);

        //Initialize error message state
        this.state = { error: '' };
    }

    handleSubmit(event) {
        event.preventDefault();

        Meteor.call('links.insert', this.refs.link.value, (error) => {
            if (error) {
                this.setState({error: 'Enter a valid URL'});
            } else {
                this.setState({ error: ''});
                this.refs.link.value = '';
            }
        });
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                  <label>Link to shorten</label>
                  <input ref="link" className="form-control" />
              </div>
              <div className="text-danger">{this.state.error}</div>
              <button className="btn btn-primary">Shorten</button>
          </form>
        );
    };
};

export default LinkCreate;


/**
 * Created by Scott on 7/7/2016.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/links';

class LinkList extends Component {
    render() {
        return (
            <div>List of Links to click</div>
        );
    }
}

export default LinkList(() => {
    Meteor.subscribe('links');

    return { links: Links.find({}).fetch() };
}, LinkList);
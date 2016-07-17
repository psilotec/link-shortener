/**
 * Created by Scott on 7/7/2016.
 */
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/links';

//List of URLs, their shortened link, and clicks from the Links collection
class LinkList extends Component {
    renderRows() {
        return this.props.links.map(link => {
            const { url, clicks, token } = link;
            const shortLink = `http://localhost:3000/${token}`;

          return (
              <tr>
                  <td>{url}</td>
                  <td>
                      <a href={shortLink}>{shortLink}</a>
                  </td>
                  <td>
                      {clicks}
                  </td>
              </tr>
          );
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Address</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderRows()}
                </tbody>

            </table>
        );
    }
}

//Subscription to the whole Links collection
export default createContainer(() => {
    Meteor.subscribe('links');

    return { links: Links.find({}).fetch() };
}, LinkList);
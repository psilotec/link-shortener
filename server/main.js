import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';

//Publish the whole Links collection
Meteor.startup(() => {
    Meteor.publish('links', function() {
        return Links.find({});
    })
});

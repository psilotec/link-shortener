import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';

//Publish the whole Links collection
Meteor.startup(() => {
    Meteor.publish('links', function() {
        return Links.find({});
    })
});

//Middleware to check if incoming request has a token or not
WebApp.connectHandlers
    .use(req => console.log(req));
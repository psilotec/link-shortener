import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

//Publish the whole Links collection
Meteor.startup(() => {
    Meteor.publish('links', function() {
        return Links.find({});
    })
});

const middleware = ConnectRoute(function(router) {
   router.get('/:token', (req) => console.log(req));
});

//Middleware to check if incoming request has a token or not
WebApp.connectHandlers.use(middleware);
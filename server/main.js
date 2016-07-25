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

//Execute whenever a user visits with a route like 'localhost:3000/abcd'
function onRoute(req, res, next) {
    //Take the token out of the URL and try to find a matching link in Links collection
    const link = Links.findOne({ token: req.params.token });

    //If the link object is found, redirect user to long URL
    if (link) {
        res.writeHead(307, { 'Location': link.url });
        res.end();
    } else {
    //If link object isn't found, send user to React app
    }
}

const middleware = ConnectRoute(function(router) {
   router.get('/:token', (req) => console.log(req));
});

//Middleware to check if incoming request has a token or not
WebApp.connectHandlers.use(middleware);
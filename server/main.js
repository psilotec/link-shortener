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

    if (link) {
        //If the link object is found, update clicks and redirect user to long URL
        Links.update(link, { $inc: { clicks: 1 }});
        res.writeHead(307, { 'Location': link.url });
        res.end();
    } else {
    //If link object isn't found, send user to React app
        next();
    }
}

const middleware = ConnectRoute(function(router) {
   router.get('/:token', onRoute);
});

//Middleware to check if incoming request has a token or not
WebApp.connectHandlers.use(middleware);
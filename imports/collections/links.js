/**
 * Created by Scott on 6/27/2016.
 */
import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'links.insert': function(url) {
        console.log('attempting to save', url);
    }
});

export const Links = new Mongo.Collection('links');
/**
 * Created by Scott on 6/27/2016.
 */
import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'links.insert': function(url) {
        console.log('attempting to save', url);
        check(url, Match.Where(url => validUrl.isUri(url)));
    }
});

export const Links = new Mongo.Collection('links');
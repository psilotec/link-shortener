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

        //Save the URL
        const token = Math.random().toString(36).slice(-5);
        Links.insert({ url, token, clicks: 0 });
    }
});

export const Links = new Mongo.Collection('links');
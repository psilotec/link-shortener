/**
 * Created by Scott on 6/27/2016.
 */
import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'links.insert': function(url) {
        //Debugging
        console.log('attempting to save', url);
        //URL validation with valid-url package
        check(url, Match.Where(url => validUrl.isUri(url)));

        //Create a token and save the URL+token
        const token = Math.random().toString(36).slice(-5);
        Links.insert({ url, token, clicks: 0 });
    }
});

//Create and export the Links collection
export const Links = new Mongo.Collection('links');
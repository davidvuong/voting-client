import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// Setup code for jsdom in order to get React working.
//
// Create jsdom versions of document and window objects that would normally be
// provided via the browser. We're then adding that into this "global" obj.
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// In addition, all properties in `window` need to be added to the global obj.
Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

// Same with voting-server, configure chai to support immutable objs.
chai.use(chaiImmutable);

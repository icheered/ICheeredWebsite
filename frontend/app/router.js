import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('/', function () {
    this.route('resume');
    this.route('projects');
    this.route('contact');
  });
  this.route('not-found', { path: '/*path' });
});

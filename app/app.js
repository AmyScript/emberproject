import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';


let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,

  ready: function() {
	Ember.$(".dropDownButton").click( function() {
	Ember.$('.rightDropDownMenu').removeClass("invisible");
	});  	
  }
});


loadInitializers(App, config.modulePrefix);

export default App;


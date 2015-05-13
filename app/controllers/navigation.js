import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  menuVisible: Em.computed.alias('controllers.application.menuVisible')
});

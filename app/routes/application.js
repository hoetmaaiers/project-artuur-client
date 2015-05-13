import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeMenu: function(){
      this.get('controller').set('menuVisible', false);
    },

    toggleMenu: function(){
      this.controller.set('menuVisible', true);
    }
  }
});

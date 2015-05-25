import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('workshop');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    var tags = this.getRelation(model, 'tags');
    var audiences = this.getRelation(model, 'audiences');
    controller.set('tags', tags);
    controller.set('audiences', audiences);
  },

  getRelation: function (workshops, relationKey) {
    var uniqTags = Em.A();
    workshops.getEach(relationKey).forEach(function(tags) {
      tags.forEach(function(tag) {
        uniqTags.pushObject(tag)
      });
    });

    return uniqTags.uniq();
  }
});

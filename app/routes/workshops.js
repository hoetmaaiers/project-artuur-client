import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('workshop');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    var tags = this.getRelation(model, 'tags');
    controller.set('tags', tags);

    var audiences = this.getRelation(model, 'audiences');
    controller.set('audiences', audiences);

    controller.set('types', Em.A([
      Em.Object.create({type: "all", title: "Allemaal", checked: true}),
      Em.Object.create({type: "in_house", title: "In huis"}),
      Em.Object.create({type: "on_request", title: "Op aanvraag"})
    ]));
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

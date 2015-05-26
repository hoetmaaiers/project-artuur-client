import Ember from 'ember';

export default Ember.Controller.extend({
  filteredWorkshops: Em.computed.oneWay('model'),
  // ('model.@each', function(){
  //   Em.Logger.debug('filteredWorkshops', this.get('model'));
  //   return this.get('model');
  // }),

  checkedTags: Em.computed.filterBy('tags', 'checked', true),
  checkedAudiences: Em.computed.filterBy('audiences', 'checked', true),

  actions: {
    toggleFilter: function(tag) {
      tag.toggleProperty('checked');
    }
  },

  observeFilters: Em.observer('checkedTags.@each', 'checkedAudiences.@each', function() {
    Em.Logger.debug('checkedTags', this.get('checkedTags.length'))
    Em.Logger.debug('checkedAudiences', this.get('checkedAudiences.length'))

    this.filterWorkshops()
  }),

  filterWorkshops: function() {
    let workshops = this.get('model');

    // filter with tags
    if (Em.isPresent(this.get('checkedTags'))) {
      workshops = this.filterWorkshopsWithFilter(workshops, this.get('checkedTags'), 'tags');
    }

    // filter with audiences
    if (Em.isPresent(this.get('checkedAudiences'))) {
      workshops = this.filterWorkshopsWithFilter(workshops, this.get('checkedAudiences'), 'audiences');
    }

    this.set('filteredWorkshops', workshops);

  },

  filterWorkshopsWithFilter: function(workshops, tags, filterType) {
    return workshops.filter((workshop) => {
      return tags.every( (tag) => {
        return workshop.get(filterType).mapBy('name').contains(tag.get('name'));
      });
    });
  }
});

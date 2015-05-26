import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this.get('checkedTypes');
    this.get('checkedTags');
    this.get('checkedAudiences');
  },

  filteredWorkshops: Em.computed.oneWay('model'),

  checkedTags      : Em.computed.filterBy('tags', 'checked', true),
  checkedAudiences : Em.computed.filterBy('audiences', 'checked', true),
  checkedTypes     : Em.computed.filterBy('types', 'checked', true),

  actions: {
    toggleFilter: function(tag) {
      tag.toggleProperty('checked');
    },

    chooseType: function(type) {
      this.get('types').setEach('checked', false);
      type.set('checked', true);
    }
  },

  observeFilters: Em.observer('model.@each', 'checkedTypes.@each', 'checkedTags.@each', 'checkedAudiences.@each', function() {
    this.filterWorkshops()
  }),

  filterWorkshops: function() {
    let workshops = this.get('model');
    if (Em.isEmpty(workshops)) { return false }

    // filter with types
    if (Em.isPresent(this.get('checkedTypes'))) {
      workshops = this.filterWorkshopsWithType(workshops, this.get('checkedTypes.firstObject.type'));
    }

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

  filterWorkshopsWithType: function(workshops, type) {
    if (type === 'all') {
      return workshops;
    } else {
      return workshops.filterBy('type', type);
    }
  },

  filterWorkshopsWithFilter: function(workshops, tags, filterType) {
    return workshops.filter((workshop) => {
      return tags.every( (tag) => {
        return workshop.get(filterType).mapBy('name').contains(tag.get('name'));
      });
    });
  }
});

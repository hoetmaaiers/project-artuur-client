import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['filter-item'],
  classNameBindings: ['filter.checked:active'],

  click: function() {
    this.sendAction('toggle', this.get('filter'));
  }
});

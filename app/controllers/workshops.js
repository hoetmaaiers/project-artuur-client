import Ember from 'ember';

export default Ember.Controller.extend({
  filteredWorkshops: Em.computed('model.@each', function(){
    Em.Logger.debug('filteredWorkshops', this.get('model'));
    return this.get('model');
  })
});

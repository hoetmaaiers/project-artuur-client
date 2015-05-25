import DS from 'ember-data';

export default DS.Model.extend({
  title       : DS.attr('string'),
  type        : DS.attr('string'),
  description : DS.attr('string'),
  date        : DS.attr('date'),
  coverImage  : DS.attr('string'),

  tags      : DS.hasMany('tags'),
  audiences : DS.hasMany('audiences')
});

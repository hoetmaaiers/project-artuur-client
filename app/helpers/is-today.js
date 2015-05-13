import Ember from 'ember';

export function isToday(params) {
  var weekday = params[0];
  var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  if (days.indexOf(weekday) === new Date().getDay()) {
    return 'today';
  } else {
    return null;
  }
}

export default Ember.HTMLBars.makeBoundHelper(isToday);

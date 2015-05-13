import Ember from 'ember';
import SvgInjectMixin from '../../../mixins/svg-inject';
import { module, test } from 'qunit';

module('SvgInjectMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var SvgInjectObject = Ember.Object.extend(SvgInjectMixin);
  var subject = SvgInjectObject.create();
  assert.ok(subject);
});

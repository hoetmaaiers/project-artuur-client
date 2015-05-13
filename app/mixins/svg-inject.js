import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement: function(){
    this.scheduleSvgInject();
    this._super();
  },

  contentChanged: Em.observer('controller.content.[]', function(){
    this.scheduleSvgInject();
  }).on('init'),

  scheduleSvgInject: function(){
    // body...
    Em.run.next(this, function(){
      Ember.run.scheduleOnce('afterRender', this, 'injectSvg');
    });
  },

  injectSvg: function(){
    var svgsToInject = $.makeArray(this.$('.js-svg-inject'));
    console.log('lets inject svg');
    // Do the injection
    SVGInjector(svgsToInject);
  }

});

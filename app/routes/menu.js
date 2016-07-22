import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Pepperoni', 'Veggie Supreme', 'Cheese', 'Build Your Own'];
  }
});

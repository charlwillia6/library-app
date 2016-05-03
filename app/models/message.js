import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
    email: attr('string'),
    message: attr('string'),
                            
    isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
    isValidMessage: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
    isDisabled: Ember.computed.not('isValid')
});

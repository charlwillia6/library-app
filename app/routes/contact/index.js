import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        return this.store.createRecord('message');
    },
    
    actions: {
        saveMessage(newMessage) {
            newMessage.save().then(() => this.transitionTo('contact'));
            
            this.set('responseMessage', `We got your message and we'll get in touch soon.`);
        },
        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});


class Events {
    static on(eventName, callback, callbackScope) {
        document.addEventListener(eventName, function(event) {
            callback(event.detail);
        }.bind(callbackScope || null));
    }
}

module.exports = Events;
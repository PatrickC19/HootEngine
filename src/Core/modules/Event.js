
class Event extends CustomEvent {
    constructor(eventName, options) {
        super(eventName, { detail: options });

        this.name = eventName;
        this.options = options;
    }

    dispatch() {
        document.dispatchEvent(this);
    }
}

module.exports = Event;
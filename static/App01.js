'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Events = [{
  id: 0,
  sport: 'Basketball',
  location: 'Southwest Courts',
  people_going: 0,
  date: "2016-08-15",
  time: '12:20',
  user_going: false
}];

var contentNode = document.getElementById("contents");

var EventFilter = function (_React$Component) {
  _inherits(EventFilter, _React$Component);

  function EventFilter() {
    _classCallCheck(this, EventFilter);

    return _possibleConstructorReturn(this, (EventFilter.__proto__ || Object.getPrototypeOf(EventFilter)).apply(this, arguments));
  }

  _createClass(EventFilter, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'This is a placeholder for the Event Filter.'
      );
    }
  }]);

  return EventFilter;
}(React.Component);

var EventRow = function EventRow(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.Event.sport
    ),
    React.createElement(
      'td',
      null,
      props.Event.location
    ),
    React.createElement(
      'td',
      null,
      props.Event.date
    ),
    React.createElement(
      'td',
      null,
      props.Event.time
    ),
    React.createElement(
      'td',
      null,
      props.Event.people_going
    )
  );
};

function ChangeUserGoing() {
  console.log();
}

function EventTable(props) {
  var EventRows = props.Events.map(function (Event) {
    return React.createElement(EventRow, { key: Event.id, Event: Event });
  });
  return React.createElement(
    'table',
    { className: 'bordered-table' },
    React.createElement(
      'thead',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          'Sport'
        ),
        React.createElement(
          'th',
          null,
          'Location'
        ),
        React.createElement(
          'th',
          null,
          'Date'
        ),
        React.createElement(
          'th',
          null,
          'Time'
        ),
        React.createElement(
          'th',
          null,
          'Who\'s Going?'
        )
      )
    ),
    React.createElement(
      'tbody',
      null,
      EventRows
    )
  );
}

var EventAdd = function (_React$Component2) {
  _inherits(EventAdd, _React$Component2);

  function EventAdd() {
    _classCallCheck(this, EventAdd);

    var _this2 = _possibleConstructorReturn(this, (EventAdd.__proto__ || Object.getPrototypeOf(EventAdd)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(EventAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.EventAdd;
      this.props.createEvent({

        sport: form.sport.value,
        location: form.location.value,
        date: form.date.value,
        time: form.time.value,
        people_going: 0
      });
      // Clear the form for the next input.
      form.sport.value = '';
      form.location.value = '';
      form.date.value = '';
      form.time.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { name: 'EventAdd', onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'sport', placeholder: 'Sport' }),
          React.createElement('input', { type: 'text', name: 'location', placeholder: 'Location' }),
          React.createElement('input', { type: 'date', name: 'date', placeholder: 'When?' }),
          React.createElement('input', { type: 'time', name: 'time', placeholder: 'When?' }),
          React.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return EventAdd;
}(React.Component);

var EventList = function (_React$Component3) {
  _inherits(EventList, _React$Component3);

  function EventList() {
    _classCallCheck(this, EventList);

    var _this3 = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this));

    _this3.state = { Events: [] };

    _this3.createEvent = _this3.createEvent.bind(_this3);
    return _this3;
  }

  _createClass(EventList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        Events: Events
      });
    }
  }, {
    key: 'createEvent',
    value: function createEvent(newEvent) {
      var newEvents = this.state.Events.slice();
      newEvent.id = this.state.Events.length + 1, newEvents.push(newEvent);
      this.setState({ Events: newEvents });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Event Tracker'
        ),
        React.createElement(EventFilter, null),
        React.createElement('hr', null),
        React.createElement(EventTable, { Events: this.state.Events }),
        React.createElement('hr', null),
        React.createElement(EventAdd, { createEvent: this.createEvent })
      );
    }
  }]);

  return EventList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(EventList, null), contentNode);
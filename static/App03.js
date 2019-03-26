"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var threads = [{
  title: "Thread One Title",
  body: "Desription of the thread topic",
  replies: ["Test reply 1", "Test reply 2"]
}, {
  title: "Thread Two Title",
  body: "Yet another description of thread topic",
  replies: ["And another reply for this thread"]
}];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Thread = function (_React$Component) {
  _inherits(Thread, _React$Component);

  function Thread() {
    _classCallCheck(this, Thread);

    return _possibleConstructorReturn(this, (Thread.__proto__ || Object.getPrototypeOf(Thread)).call(this));
  }

  _createClass(Thread, [{
    key: "render",
    value: function render() {
      var title = this.props.title;
      var body = this.props.body;

      var replies = this.props.replies.map(function (reply) {
        return React.createElement(
          "li",
          null,
          reply
        );
      });

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          title
        ),
        React.createElement(
          "p",
          null,
          body
        ),
        React.createElement(
          "ul",
          null,
          replies
        ),
        React.createElement("hr", null)
      );
    }
  }]);

  return Thread;
}(React.Component);

var ThreadList = function (_React$Component2) {
  _inherits(ThreadList, _React$Component2);

  function ThreadList() {
    _classCallCheck(this, ThreadList);

    return _possibleConstructorReturn(this, (ThreadList.__proto__ || Object.getPrototypeOf(ThreadList)).call(this));
  }

  _createClass(ThreadList, [{
    key: "render",
    value: function render() {
      var thrds = this.props.threads.map(function (thread) {
        return React.createElement(Thread, { title: thread.title, body: thread.body, replies: thread.replies });
      });
      thrds = thrds.reverse();
      return React.createElement(
        "div",
        null,
        thrds
      );
    }
  }]);

  return ThreadList;
}(React.Component);

var ThreadCreator = function (_React$Component3) {
  _inherits(ThreadCreator, _React$Component3);

  function ThreadCreator() {
    _classCallCheck(this, ThreadCreator);

    var _this3 = _possibleConstructorReturn(this, (ThreadCreator.__proto__ || Object.getPrototypeOf(ThreadCreator)).call(this));

    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(ThreadCreator, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.createThread;
      this.props.createThread({
        title: form.title.value,
        body: form.description.value,
        replies: []
      });
      // Clear the form for the next input.
      form.title.value = '';
      form.description.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "createThread", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
          React.createElement("input", { type: "text", name: "description", placeholder: "Description" }),
          React.createElement(
            "button",
            null,
            "Start New Thread"
          )
        )
      );
    }
  }]);

  return ThreadCreator;
}(React.Component);

var ThreadDisplay = function (_React$Component4) {
  _inherits(ThreadDisplay, _React$Component4);

  function ThreadDisplay() {
    _classCallCheck(this, ThreadDisplay);

    var _this4 = _possibleConstructorReturn(this, (ThreadDisplay.__proto__ || Object.getPrototypeOf(ThreadDisplay)).call(this));

    _this4.state = { threads: [] };
    _this4.createThread = _this4.createThread.bind(_this4);
    return _this4;
  }

  _createClass(ThreadDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      this.setState({
        threads: threads
      });
    }
  }, {
    key: "createThread",
    value: function createThread(newThread) {
      var newThreads = this.state.threads.slice();
      newThreads.push(newThread);
      this.setState({ threads: newThreads });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        // Something with all the threads posted
        React.createElement(
          "div",
          null,
          React.createElement(ThreadList, { threads: this.state.threads }),
          React.createElement(ThreadCreator, { createThread: this.createThread })
        )
      );
    }
  }]);

  return ThreadDisplay;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(ThreadDisplay, null), contentNode);
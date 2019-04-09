
var contentNode = document.getElementById("contents");

class EventFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the Event Filter.</div>;
  }
}

const EventRow = (props) => (
  <tr>
    <td>{props.Event.sport}</td>
    <td>{props.Event.location}</td>
    <td>{props.Event.date}</td>
    <td>{props.Event.time}</td>
    <td>{props.Event.people_going}</td>
    
  </tr>
);

function ChangeUserGoing(){
  console.log();

  
}


function EventTable(props) {
  const EventRows = props.Events.map(Event => (
    <EventRow key={Event.id} Event={Event} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Sport</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
          <th>Who's Going?</th>

        </tr>
      </thead>
      <tbody>{EventRows}</tbody>
    </table>
  );
}

class EventAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.EventAdd;
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

  render() {
    return (
      <div>
        <form name="EventAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="sport" placeholder="Sport" />
          <input type="text" name="location" placeholder="Location" />
          <input type="date" name="date" placeholder="When?" />
          <input type="time" name="time" placeholder="When?" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

class EventList extends React.Component {
  constructor() {
    super();
    this.state = { Events: [] };

    this.createEvent = this.createEvent.bind(this);
  }

  componentDidMount() {

    fetch(`/api/events `).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ Events: data.records });
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch issues:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

  createEvent(newEvent) {
    const newEvents = this.state.Events.slice();
    newEvent.id = this.state.Events.length + 1,
    newEvents.push(newEvent);
    this.setState({ Events: newEvents });
  }

  render() {
    return (
      <div>
        <h1>Event Tracker</h1>
        <EventFilter />
        <hr />
        <EventTable Events={this.state.Events} />
        <hr />
        <EventAdd createEvent={this.createEvent} />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<EventList />, contentNode);

const issues = [
  {
    id: 1,
    
    name: "Doris Chan",
    created: new Date("2016-08-15"),
    interest: "Badminton",
    time: "7PM",
    title: "Error in console when clicking Add"
  }
];

var contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
  render() {
    return <div>Junior</div>;
  }
}


let IssueRow = (props) => (
  <table>
    <tr><td>{props.issue.interest}</td></tr>
    <tr><td>{props.issue.time}</td></tr>
  </table>
);

let NameRow = (props) => (
  <tr>
    
    <td>{props.issue.name}</td>
    
    
    
  </tr>
);

function NameTable(props){
  const issueRows = props.issues.map(issue => (
    <NameRow key={issue.id} issue={issue} />
  ));
  
  
  return (
    <table >
      <thead>
        <tr>
          
         
        </tr>
      </thead>
      <tbody>{issueRows}</tbody>
    </table>
  );
}

function IssueTable(props) {
  const issueRows = props.issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));


  return (
    <table>{issueRows}</table>
  );
}

class IssueAdd2 extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.issueAdd2;
    this.props.createIssue({
      time: form.time.value,
      interest: "",
      created: new Date(),
    });
    // Clear the form for the next input.
   
    form.time.value = '';
    
  }

  render() {
    return (
      <div>
        <form name="issueAdd2" onSubmit={this.handleSubmit}>
          <input type="text" name="time" placeholder="Time" />
          <button class="mdc-button">
           edit</button>
        </form>
      </div>
    );
  }
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.issueAdd;
    this.props.createIssue({
      interest: form.interest.value,
      time: "",
      created: new Date(),
    });
    // Clear the form for the next input.
   
    form.interest.value = '';
    
  }

  render() {
    return (
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="interest" placeholder="Interest" />
          <button class="mdc-button">
           edit</button>
        </form>
      </div>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };

    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      issues: issues
    });
  }

  createIssue(newIssue) {
   
    if(newIssue.interest != ""){
    this.state.issues[0].interest = newIssue.interest;
    }
    if(newIssue.time != ""){
      this.state.issues[0].time = newIssue.time;
    }
    
   
    this.setState({ issues: this.state.issues });
    
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <div style={{display: "inline-block" }}>
        <img src = "https://vignette.wikia.nocookie.net/onepunchman/images/7/70/Child_Emperor_%26_Pig_God_vs._Eyesight.png/revision/latest?cb=20180601180653" height = "140" width = "160"></img>
        </div>
        
        <div style = {{display:"inline-block"}}>
        <NameTable issues = {this.state.issues}/>
        
        <IssueFilter issues = {this.state.issues}/>
        </div>
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
        <IssueAdd2 createIssue= {this.createIssue}/>
        <a href='index.html'>Back to Events Page</a>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<IssueList />, contentNode);

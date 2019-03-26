const threads = [
  {
    title: "Thread One Title",
    body: "Desription of the thread topic",
    replies: [
      "Test reply 1",
      "Test reply 2"
    ]
  },
  {
    title: "Thread Two Title",
    body: "Yet another description of thread topic",
    replies: [
      "And another reply for this thread"
    ]
  }

];


// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Thread extends React.Component {
  constructor() {
    super();
  }

  render() {
    const title = this.props.title;
    const body = this.props.body;
   
    const replies = this.props.replies.map(reply => (
      <li>{reply}</li>
    ))

    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <ul>
          {replies}
        </ul>
        <hr />
      </div>
    );
  }
}

class ThreadList extends React.Component{
  constructor(){
    super();
  } 
  render(){
    let thrds = this.props.threads.map(thread => (
      <Thread title={thread.title} body={thread.body} replies={thread.replies} />
    ))
    thrds = thrds.reverse();
    return(
      <div>
        {thrds}
      </div>
    )
  }
}

class ThreadCreator extends React.Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.createThread;
    this.props.createThread({
      title: form.title.value,
      body: form.description.value,
      replies: []
    });
    // Clear the form for the next input.
    form.title.value = '';
    form.description.value = '';
  }

  render(){
    return (
      <div>
        <form name="createThread" onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="description" placeholder="Description" />
          <button>Start New Thread</button>
        </form>
      </div>

    )
  }

}

class ThreadDisplay extends React.Component{

  constructor(){
    super();
    this.state = { threads: [] };
    this.createThread = this.createThread.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData(){
    this.setState({
      threads: threads
    })
  }

  createThread(newThread) {
    const newThreads = this.state.threads.slice();
    newThreads.push(newThread);
    this.setState({ threads: newThreads });
  }

  render(){
    return (
      <div>
        <ThreadList threads = {this.state.threads}/>
        <ThreadCreator createThread={this.createThread}/>
      </div> 
      
    )
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<ThreadDisplay />, contentNode);

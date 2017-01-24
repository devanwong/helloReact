// presentational component : renders something visible to the screen responds to user input || takes props and render something to screen  (greeter message)
// container component: maintain state and render children

// access 2 props that get passed via the parents render to the screen
var GreeterMessage = React.createClass({
  render: function (){
    var name = this.props.name;
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p> {message} </p>
      </div>
    );
  }
});
// presentational component || doesnt maintain its own state || takes some propr renders form and when form is submitted and calls the function
var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0){
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0){
      this.refs.message.value="";
      updates.message = message;
    }
    this.props.onNewData(updates);
  },


  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
        <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <button>submit</button>
      </form>
    );
  }
});
// first upper case React language.. this is a component
// most common .createClass (take in one arguement and options object)
//must have a render function
//render can only return one root element.
//var this.proprs is a built in function
// container component: maintains state for the app like name attr when state gets updates it updates its children
var Greeter = React.createClass({
  getDefaultProps: function () {
    return{
      name: 'React',
      message: 'This is the default message'
    };
  },
// another component known as a state; which is maintained and can be updated
 // getInitialState (built in) returns an object and set to this.state
 // gets the state to the props name value
getInitialState: function() {
  return{
    name: this.props.name,
    message: this.props.message
  };
},
// e is an event handler basic language fo this action
// prevent form from submit and causing a page refresh
// this.refs an object, with name attr on it, == to browser node, represents and html element to get it has to use .value
// ref.name.value -- clears the input box hence empty string
// set state call : updates the state and rerenders the component
// if statement -- checking the name variable if empty dont show a blank.
// cannot up date the props but can in state
  handleNewData: function (updates){
    this.setState(updates)
  },
// prop get passes into a component as you intialize it
//ref lets a give an element, to access somewhere
// container component should not do much rendering except for rendering children
// onSubmit built it attribute --built it expects a function to get passed to it
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>

          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewData={this.handleNewData}/>

      </div>
    );
  }
});

var firstName = 'Devan';
//how we kick off all of our render
//React DOM most common DOM to use
ReactDOM.render(
    <Greeter name={firstName}/>,
  document.getElementById('app')
);

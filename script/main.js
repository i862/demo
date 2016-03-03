/**
 * Created by menzhongxin on 16/3/1.
 */
import React from 'react'
import { Router, Route, Link,IndexRoute,Redirect} from 'react-router'
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">App</Link>
        </h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
});

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
          {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
});

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id||'haha'}</h3>
  }
});
const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

React.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="/messages/:id" component={Message} />
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>
    </Route>
  </Router>
), document.body)
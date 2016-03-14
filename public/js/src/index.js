const React = require('react');
const ReactDOM= require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

var components = require('./components/');
var Menu = React.createClass({
  render(){
    var _cmpAry = [];
    for(var key in components){
      _cmpAry.push(<li key={key}> <Link to={"/"+key}> {key} </Link></li>);
    }
  return(<div>
      <ul role='nav'>
        {_cmpAry}
      </ul>
      {this.props.children}
    </div>
  );
  }
});

function cmps(){
  var cmpAry = [];
  for(var key in components){
    cmpAry.push(<Route key={key} path = {"/"+key} component={components[key]}/>);
  }
  return cmpAry;
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Menu}>
      {cmps()}
    </Route>
  </Router>
), document.querySelector('#app'));



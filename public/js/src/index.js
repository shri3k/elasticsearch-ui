const React = require('react');
const ReactDOM= require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

var components = require('./components/');
// var cmpRoutes = require('./components').map(cmp => {
//   return ( <Route path = `/{cmp}` component = {cmp}/> );
// });

// var App = React.createClass({
//   render: ()=>{
//     return (<h2> hello there </h2>);
//   }
// });

var Menu = React.createClass({
  render: ()=>{
    var _cmpAry = [];
    for(var key in components){
      _cmpAry.push(<li> <Link to={"/"+key}> {key} </Link></li>);
    }
  return(<div>
      <ul role='nav'>
        {_cmpAry}
      </ul>
    </div>
  );
  }
});

function cmps(){
  var cmpAry = [];
  for(var key in components){
    cmpAry.push(<Route path = {"/"+key} component={key}> {key} </Route>);
  }
  return cmpAry;
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/app' component={Menu}>
      {cmps()}
    </Route>
  </Router>
), document.querySelector('#app'));
// ReactDOM.render(<h1> hello there </h1>, document.querySelector('#app'));

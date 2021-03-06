// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

// const ExpenseDashboardPage = () => (
//   <div>
//     This is from my dashboard component
//   </div>
// );

// const AddExpensePage = () => (
//   <div>
//     This is from my add expense component
//   </div>
// );

// const EditExpensePage = () => (
//   <div>
//     This is from my edit expense component
//   </div>
// );

// const HelpPage = () => (
//   <div>
//     This is from my help component
//   </div>
// );

// const routes = (
//   <BrowserRouter>
//     <div>
//       <Route path="/" component={ExpenseDashboardPage} exact={true} />
//       <Route path="/create" component={AddExpensePage} />
//       <Route path="/edit" component={EditExpensePage} />
//       <Route path="/help" component={HelpPage} />
//     </div>
//   </BrowserRouter>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));

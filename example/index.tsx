import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import confirm from '../.';

const App = () => {
  return (
    <div>
      <button onClick={e => {
        confirm({ title: 'xx-title', content: 'Modal content.' }).then(res => {
          console.log(res);
        })
      }}>ShowModal</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

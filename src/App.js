
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/Redux/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;

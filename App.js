import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './home';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



//{setScanned(false)}

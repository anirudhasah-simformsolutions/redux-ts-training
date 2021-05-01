import { Provider } from 'react-redux';
import { store } from '../state';
import RepoSearch from './RepoSearch';

const App: React.FC = () => {
    return(
        <Provider store = {store}>
            <h1>Search Repositories</h1>
            <RepoSearch />
        </Provider>
    );
}

export default App;
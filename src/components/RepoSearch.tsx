import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepoSearch: React.FC = () => {
    const [term, setTerm] = useState(''); 
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector(state => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    } 

    return(
        <div>
            <form onSubmit = {onSubmit}>
                <input value = {term} onChange = {e => setTerm(e.target.value)}/>
                <button>Search</button>
                { loading && 'Loading...' }
                { error && <h3>{error}</h3> }
                { !error && !loading && data.map(repo => {
                    return <div key = {repo}>{repo}</div>
                })}
            </form>
        </div>
    );
}

export default RepoSearch;
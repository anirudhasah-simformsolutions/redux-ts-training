import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (text: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_REPOSITORIES
        });

        try {
            const response = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: text
                }
            });

            const names = response.data.objects.map((repo: any) => {
                return repo.package.name;
            });

            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            });
        } catch(error) {
            dispatch({
                type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            });
        }
    }
}
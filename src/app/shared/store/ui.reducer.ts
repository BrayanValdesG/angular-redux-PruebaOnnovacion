import { createReducer, on, Action } from '@ngrx/store';
import { isLoading, stopLoading } from './ui.actions';

export interface State {
    isLoading: boolean;
}

export const initState: State = {
    isLoading: false
}

const _uiReducer = createReducer(
    initState,
    on(isLoading, (state) => ({ ...state, isLoading: true })),
    on(stopLoading, (state) => ({ ...state, isLoading: false }))
)

export function uiReducer(state: State | undefined, action: Action): State {
    return _uiReducer(state, action);
}
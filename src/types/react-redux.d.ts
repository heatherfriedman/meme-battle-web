import { RootState } from '../store/rootReducer';
import { store } from '../store/store';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
  export function useDispatch(): typeof store.dispatch;
}

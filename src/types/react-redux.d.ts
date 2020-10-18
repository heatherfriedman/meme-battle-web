import { RootState } from '../store/rootReducer';
import { store } from '../store/store';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState {}
  export function useDispatch(): typeof store.dispatch;
}

declare module '@reduxjs/toolkit' {
  export type ExtractActions<
    T extends {
      [K in keyof SliceCaseReducers<
        unknown
      >]: ActionCreator<unknown>;
    }
  > = {
    [K in keyof T]: ReturnType<T[K]>;
  };

  export type ExtractPayloads<
    T extends {
      [K in keyof SliceCaseReducers<
        unknown
      >]: ActionCreator<unknown>;
    }
  > = {
    [K in keyof T]: T[K] extends ActionCreatorWithPayload<
      infer U,
      any
    >
      ? U
      : never;
  };
}

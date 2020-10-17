import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface InitialLoginState {
  username: string | null;
  count: number;
  name: ValidName;
}

const initialState: InitialLoginState = {
  username: null,
  count: 0,
  name: 'heather',
};

export type ValidName =
  | 'heather'
  | 'sawyer'
  | 'alex'
  | 'luna'
  | 'tycho';

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logIn(
      state,
      action: PayloadAction<{ username: string }>,
    ) {
      state.username = action.payload.username;
    },
    incrementByOne(state) {
      state.count += 1;
    },
    incrementByN(
      state,
      action: PayloadAction<{ n: number }>,
    ) {
      const { n } = action.payload;
      state.count += n;
    },
    updateName(
      state,
      action: PayloadAction<{ newName: ValidName }>,
    ) {
      const { newName } = action.payload;
      state.name = newName;
    },
  },
});

export const { actions, reducer, name } = slice;

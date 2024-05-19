import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initalState = {
  user: { username: 'Ray' },
  theme: 'forest',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    loginUser: (state, action) => {
      console.log('Login');
    },
    logoutUser: (state, action) => {
      console.log('logout');
    },
    toggleTheme: (state, action) => {
      console.log('Theme Toggle');
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;

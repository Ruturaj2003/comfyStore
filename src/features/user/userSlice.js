import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  garden: 'garden',
  forest: 'forest',
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.forest;

  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const getUserFormLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};
const initalState = {
  user: getUserFormLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log(state);
    },
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Log Out Successfull');
    },
    toggleTheme: (state, action) => {
      const { forest, garden } = themes;
      state.theme = state.theme === forest ? garden : forest;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;

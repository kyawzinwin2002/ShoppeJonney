import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user:null,
  token:null
};

const STORAGE_ONE= "user"
const storedUser = Cookies.get(STORAGE_ONE)
if(storedUser){
    initialState.user = JSON.parse(storedUser)
}

const STORAGE_TW0 = "token";
const storedToken = Cookies.get(STORAGE_TW0);
if (storedToken) {
  initialState.token = storedToken;
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
   GET_USER:(state,{payload}) => {
    state.user = payload.user
    state.token = payload.token;
    Cookies.set(STORAGE_ONE,JSON.stringify(state.user))
    Cookies.set(STORAGE_TW0,state.token)
   },
   REMOVE_USER:(state) => {
    state.user = null
    state.token = null;
    Cookies.remove(STORAGE_ONE);
    Cookies.remove(STORAGE_TW0);
   }
  },
});

export const {
 GET_USER,
 REMOVE_USER
} = authSlice.actions;
export default authSlice.reducer;

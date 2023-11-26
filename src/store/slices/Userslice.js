import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
      name: "user",
      initialState: [],
      reducers: {
       addMsg(state, action) {
        state.push(action.payload);
       },
       addId(state, action) {
        state.push(action.payload);
       },
       deleteMsg(state, action) {}
      },
    });
    console.log(userSlice.actions);
    
 export default userSlice.reducer;
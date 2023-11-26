import React from 'react'
import "./Message.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
        )
    }
}

export default Message



// "@reduxjs/toolkit": "^1.9.5",
//     "react-redux": "^8.1.2",
//     "@reduxjs/toolkit": "^1.9.5",
// "use client";

// import store from "./store";
// import { Provider } from "react-redux";

// export function Providers({ children }) {
//   return <Provider store={store}>{children}</Provider>;
// }

// - Redux [folder] 
// -- provide.js
// -- store.js 
// import { configureStore } from "@reduxjs/toolkit";
// import pageReducer from "./pageSlice";
// import appSlice from "./appSlice";
// import userSlice from "./userSlice";
// import stateSlice from "./stateSlice";
// import gallerySlice from "./gallerySlice";
// import projectSlice from "./projectSlice";

// export default configureStore({
//   reducer: {
//     pageState: pageReducer,
//     appState: appSlice,
//     userState: userSlice,
//     stateState: stateSlice,
//     galleryState: gallerySlice,
//     projectState

// --- AppSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: null,
//   draggedType: null,
//   galleryOpen: true,
// };

// const appSlice = createSlice({
//   name: "page",
//   initialState,
//   reducers: {
//     setDraggedType: (state, action) => {
//       state.draggedType = action.payload;
//     },
//   },
// });

// export const { setDraggedType } = appSlice.actions;

// export default appSlice.reducer;
// Pitani Hamsaraj11:13 AM
// -- SLECTOR
//  const dispatch = useDispatch();
//   const [isLoading, setisLoading] = useState(true);

//   const userState = useSelector((state) => state.userState);
//   const { error, userInfo } = userState;
// dispatch(loginUser(obj));
// hdo-moqm-dmfsssrinu2001@gmail.com
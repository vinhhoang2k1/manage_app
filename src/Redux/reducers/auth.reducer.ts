import { createSlice } from "@reduxjs/toolkit";
// init state
const initialState = {
    student: {}
}
// create slice reducer
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        actionSetStudent: (state, { payload }) => {
            state.student = payload
        }
    }
});

// export action
export const {
    actionSetStudent
} = authSlice.actions;

// reducer
const authReducer = authSlice.reducer;
export default authReducer;
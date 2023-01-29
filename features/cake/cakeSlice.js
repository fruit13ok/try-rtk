const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 20,
};

// accepts an initial state, an object of reducer functions, and it has a name property
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    // action creators will have same name as 2 reducers functions "ordered" and "restocked"
    ordered: (state) => {
      // Slice internally use "immer", so we can update nested state like this
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions; // {ordered, restocked}

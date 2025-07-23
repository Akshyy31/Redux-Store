import { createStore } from "https://esm.sh/redux";

const initialState = {
  count: 0,
};
const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}


store.subscribe(()=>{
    document.getElementById("h1Count").innerText = store.getState().count
})



console.log("store", store);
const state = store.getState();

document.getElementById("incre").onclick = () => {
  store.dispatch({
    type: "INCREMENT",
  });
};

document.getElementById("decre").onclick = () => {
  store.dispatch({
    type: "DECREMENT",
  });
};

document.getElementById("h1Count").innerText = state.count;

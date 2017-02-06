export default function reducer(state = {
  todos: [],
  inputText:"",
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case "CHANGE_TEXT":{
      return Object.assign({}, state, {
        inputText: action.text
      });
    }
    case "ADD_TODO": {
      return Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          id: action.id
        }, ...state.todos]
      });
    }
    case "CLEAR_TEXT":{
      return Object.assign({}, state, {
        inputText: ""
      });
    }
  }

  return state
}
import { find } from 'lodash'

export default function reducer(state = {
  todos: [],
  inputText: "",
  editText: ""
}, action) {
  switch (action.type) {
    case "CHANGE_TEXT": {
      var obj = {
        inputText: action.text
      };
      if (action.textType === 'editText') {
        obj = {
          editText: action.text
        }
      }
      return Object.assign({}, state, obj);
    }
    case "ADD_TODO": {
      return Object.assign({}, state, {
        todos: [{
          canEdit: false,
          text: action.text,
          completed: false,
          id: action.id
        }, ...state.todos]
      });
    }
    case "CLEAR_TEXT": {
      var obj = {
        inputText: ""
      };
      if (action.textType === 'editText') {
        obj = {
          editText: ""
        }
      }
      return Object.assign({}, state, obj);
    }
    case 'EDIT_TODO': {
      return Object.assign({}, state, {
        todos: state.todos.map(function (todo) {
          if (todo.id === action.id) {
            todo.canEdit = true;
          }
          return todo;
        })
      });
    }
  }

  return state
}
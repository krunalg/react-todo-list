export function addTodo(text, id) {
    return {
        type: 'ADD_TODO',
        text: text,
        id
    }
}

export function changeText(text) {
    return {
        type: "CHANGE_TEXT",
        text: text
    }
}

export function clearText(){
    return {
        type: "CLEAR_TEXT"
    }
}
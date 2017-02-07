export function addTodo(text, id) {
    return {
        type: 'ADD_TODO',
        text: text,
        id
    }
}

export function editTodo(id){
    return {
        type: 'EDIT_TODO',
        id
    }
}

export function changeText(text, textType) {
    return {
        type: "CHANGE_TEXT",
        text: text,
        textType: textType
    }
}

export function clearText(textType){
    return {
        type: "CLEAR_TEXT",
        textType: textType
    }
}
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

export function saveTodo(id, text){
    return {
        type: 'SAVE_TODO',
        text,
        id
    }
}

export function removeTodo(id){
    return {
        type:'REMOVE_TODO',
        id
    }
}

export function completeTodo(id){
    return {
        type:'COMPLETE_TODO',
        id
    }
}

export function resetTodo(id){
    return {
        type: 'RESET_TODO',
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
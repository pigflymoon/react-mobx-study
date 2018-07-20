import {computed, observable} from "mobx"

class Todo {
    @observable value
    @observable id
    @observable complete

    constructor(value) {
        this.value = value
        this.id = Date.now()
        this.complete = false
    }
}

export class TodoStore {
    @observable todos = []
    @observable filter = ""

    @computed get filteredTodos() {
        console.log('this.filter', this.filter);
        var matchesFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }

    createTodo = (value) => {
        this.todos.push(new Todo(value))
    }

    clearComplete = () => {
        /*arrow function always fire within correct context and can't really change
        this.todos,one of big differences between observable arrays and plain arrays
        they act almost the same in every way excepet for we can't erase it, can't
        just point to a new object because then the reference is actually messed up
        we have lost all our reactivity at that point.
        so what they do is they give you a replace method so I can call to do is replace
        which can now replace it with a new set of todos.

        */
        const incompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(incompleteTodos);
    }

}

export default new TodoStore()

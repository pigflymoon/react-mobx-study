import {computed, observable} from "mobx"


export class TodoStore {
    @observable todos = ["buy apple", "buy orange"]
    @observable filter = ""
    @computed get filteredTodos(){
        var matchesFilter = new RegExp(this.filter,"i")
        return this.todos.filter(todo=>!this.filter || matchesFilter.test(todo))
    }

    createTodo = (value) => {
        this.todos.push(value)
    }

}

export default new TodoStore()

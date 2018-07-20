import {autorun, observable} from "mobx"


export class TodoStore {
    @observable todos = ["buy apple", "buy orange"]
    @observable filter = ""

}

var store = window.store = new TodoStore()
export default store

autorun(()=>{
    console.log(store.filter);
    console.log(store.todos[0]);
})
import { action, makeAutoObservable, observable } from "mobx";

class Store {
    count = 0

    constructor() {
        // Call it here
        makeAutoObservable(this)
    }

    increaseCount() {
        this.count += 1
        return this.count
    }
}


export default new Store()
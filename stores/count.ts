import {defineStore} from "pinia";

export const useCountStore = defineStore('count', {
    state() {
        return {
            count: 0
        };
    },
    actions: {
        increment() {
            this.count = this.count + 1;
        },
        incrBy(delta: number) {
            this.count = this.count + delta
        }
    },
    getters: {
        count_result(state) {
            debugger
            return state.count;
        }
    }
});
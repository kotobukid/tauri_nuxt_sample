import {ref} from "vue";

export const useCount = () => {
    const count = ref(0);

    const increment = () => {
        count.value = count.value + 1;
    };

    const incrBy = (delta: number) => {
        count.value = count.value + delta;
    };

    return {
        count,
        increment,
        incrBy
    };
};
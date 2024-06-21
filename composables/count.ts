import {ref} from "vue";
import {useAppConfig} from "nuxt/app";

export const useCount = () => {
    const count = ref(0);

    const increment = () => {
        count.value = count.value + 1;
    };

    const incrBy = (delta: number) => {
        count.value = count.value + delta;
    };

    const appConfig = useAppConfig();
    const log_appConfig = () => {
        console.log(appConfig);
    };

    return {
        count,
        increment,
        incrBy,
        log_appConfig
    };
};
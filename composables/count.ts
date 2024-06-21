import {ref} from "vue";
import {useAppConfig} from "nuxt/app";
import {useCountStore} from "../stores/count";

export const useCount = () => {
    const store = useCountStore();

    const count = store.count_result

    const increment = store.increment;

    const incrBy = store.incrBy;

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
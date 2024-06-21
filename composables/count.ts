import {ref, computed} from "vue";
import {useAppConfig} from "nuxt/app";
import {useCountStore} from "../stores/count";

export const useCount = () => {
    const store = useCountStore();

    const count = computed(() => store.count);

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
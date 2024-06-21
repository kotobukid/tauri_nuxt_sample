import { useAppConfig } from '#app'

export const useHeadTitle = (pageTitle?: string) => {
  const appConfig = useAppConfig()
  return {
    title: pageTitle ? `${pageTitle} - ${appConfig.title}` : appConfig.title
  }
}
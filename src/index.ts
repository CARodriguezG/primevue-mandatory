import { App } from 'vue'
const isEmpty = (value: any) => typeof value === 'undefined' || value === null

export default {
    install(vueApp: App) {
        vueApp.directive('mandatory', {
            beforeMount(el) {
                const componentInstance = el.__vueParentComponent?.ctx
                if (componentInstance && componentInstance.updateModel) {
                    const originalMethod = componentInstance.updateModel
                    componentInstance.updateModel = function (event: any, value: any) {
                        return isEmpty(value) || originalMethod.apply(this, [event, value])
                    }
                }
            }
        })
    }
}
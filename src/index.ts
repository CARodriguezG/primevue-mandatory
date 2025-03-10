import type { App } from 'vue'
const isEmpty = (value: any) => typeof value === 'undefined' || value === null

export default {
    install(vueApp: App) {
        vueApp.directive('mandatory', {
            beforeMount(_el, _binding, vnode: any) {
                if (vnode.ctx) {
                    const componentInstance = vnode.ctx.ctx
                    if (componentInstance && componentInstance.updateModel) {
                        const originalMethod = componentInstance.updateModel
                        componentInstance.updateModel = function (event: any, value: any) {
                            return isEmpty(value) || originalMethod.apply(this, [event, value])
                        }
                    }
                }
            }
        })
    }
}
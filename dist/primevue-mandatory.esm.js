const isEmpty = (value) => typeof value === 'undefined' || value === null;

var index = {
    install(Vue) {
        Vue.directive('mandatory', {
            beforeMount(el) {
                const componentInstance = el.__vueParentComponent?.ctx;
                if (componentInstance && componentInstance.updateModel) {
                    const originalMethod = componentInstance.updateModel;
                    componentInstance.updateModel = function (event, value) {
                        return isEmpty(value) || originalMethod.apply(this, [event, value])
                    };
                }
            }
        });
    }
};

export { index as default };

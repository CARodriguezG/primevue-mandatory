(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.PrimevueMandatory = factory());
})(this, (function () { 'use strict';

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

    return index;

}));

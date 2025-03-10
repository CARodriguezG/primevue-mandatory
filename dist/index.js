// src/index.ts
var isEmpty = (value) => typeof value === "undefined" || value === null;
var index_default = {
  install(vueApp) {
    vueApp.directive("mandatory", {
      beforeMount(_el, _binding, vnode) {
        if (vnode.ctx) {
          const componentInstance = vnode.ctx.ctx;
          if (componentInstance && componentInstance.updateModel) {
            const originalMethod = componentInstance.updateModel;
            componentInstance.updateModel = function(event, value) {
              return isEmpty(value) || originalMethod.apply(this, [event, value]);
            };
          }
        }
      }
    });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
// src/index.ts
var isEmpty = (value) => typeof value === "undefined" || value === null;
var index_default = {
  install(vueApp) {
    vueApp.directive("mandatory", {
      beforeMount(el) {
        var _a;
        const componentInstance = (_a = el.__vueParentComponent) == null ? void 0 : _a.ctx;
        if (componentInstance && componentInstance.updateModel) {
          const originalMethod = componentInstance.updateModel;
          componentInstance.updateModel = function(event, value) {
            return isEmpty(value) || originalMethod.apply(this, [event, value]);
          };
        }
      }
    });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
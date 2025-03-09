## Project description

Vue directive for avoiding PrimeVue Listbox component to set a null value when an option is already selected.

**WARNING: This directive has not been test in other PrimeVue components, but it should work on all components extended from BaseEditableHolder.**

### Nuxt 3 Usage

1. Create a plugin in [nuxt plugins folder](https://nuxt.com/docs/guide/directory-structure/plugins).
2. Add the following code to install the directive:

```typescript
import PrimeVueMandatory from '@carodriguezg/primevue-mandatory'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVueMandatory)
})
```
3. Add `v-mandatory` on the component:
```html
<Listbox v-mandatory :options="your_items" />
```
4. Enjoy!
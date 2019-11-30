<template>
  <div class="select">
    <country-select />
    <display-lang />
  </div>
</template>

<script>
import CountrySelect from '@/components/CountrySelect.vue'
import DisplayLang from '@/components/DisplayLang.vue'
import store from '@/store'
export default {
  name: 'Select',
  components: {
    CountrySelect,
    DisplayLang
  },
  beforeRouteEnter (to, from, next) {
    store.commit('setCountry', { name: '', languages: [] })
    next()
  }
}
</script>

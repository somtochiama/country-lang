<template>
  <div
    class="border border-grey-200 mt-5 p-4 rounded shadow-md"
    v-if="country.name"
  >
    <p class="pb-2 border-b font-bold">Name: {{ country.name }}</p>
    <p class="pt-3 font-bold">Languages: </p>
    <ul v-if="country.languages.length">
      <li
        v-for="language in country.languages"
        :key="language.code"
      >
        {{ language.name}} ({{ language.code}})
      </li>
    </ul>
    <p v-else>We have no languages on this country</p>
  </div>
</template>

<script>
export default {
  name: 'DisplayLang',
  computed: {
    country () {
      return this.$store.state.country
    }
  }
}
</script>

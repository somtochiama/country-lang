<template>
    <div class="country-select">
      <h2>Select a country: </h2>
      <p v-if="notSelected" class="text-red-400 my-2">Please select a country first</p>
      <form class="flex country-select mt-3">
          <div class="relative mr-3">
            <select
              v-model="selectedCountryCode"
              class="select-input"
            >
                <option disabled value="">Pick one country..</option>
                <option
                    v-for="country in countries"
                    :value="country.code"
                    :key="country.code"
                >
                    {{ country.name}}
                </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <button
              :disabled="loading"
              class="btn bg-yellow-400"
              type="submit"
              @click.prevent="retrieveLanguages"
          >
            <img v-if="loading" width="30" src="@/assets/loading2.svg" />
            <p v-else>Submit</p>
          </button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'CountrySelect',
  components: {
  },
  data: () => ({
    selectedCountryCode: '',
    notSelected: false
  }),
  computed: {
    countries () {
      return this.$store.state.countries
    },
    country () {
      return this.$store.state.country
    },
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    retrieveLanguages () {
      if (!this.selectedCountryCode) {
        this.notSelected = true
      } else {
        this.notSelected = false
        this.$store.dispatch('fetchCountry', this.selectedCountryCode)
      }
    }
  },
  mounted () {
    this.$store.dispatch('fetchCountries')
  }
}
</script>

<style>
.select-input {
  @apply block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded w-full;
  box-sizing: border-box;
}

.select-input:focus {
  @apply outline-none bg-white border-yellow-500
}
</style>

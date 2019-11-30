<template>
  <div class="">
    <h1>Do you like to know the language(s) of a country</h1>
    <div class="mt-3 btn-box text-center">
      <button class="mr-3 btn bg-blue-600 hover:bg-blue-500">
        <router-link to="/email">Yes</router-link>
      </button>
      <button class="ml-3 btn bg-red-600 hover:bg-red-500">
        <router-link to="/bye">No</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    goto (path) {
      this.$router.history.updateRoute(this.$router.match(`/${path}`))
    }
  }
}
</script>

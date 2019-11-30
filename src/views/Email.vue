<template>
  <div class="verify">
    <h1>Please verify your email</h1>
    <form class="w-full flex mt-5" @submit.prevent="submitEmail">
        <input
          v-model="email"
          class="bg-white w-full border-yellow-400 border-2 text-gray-700 mr-3 p-3 focus:outline-none rounded"
          type="email"
          placeholder="Email"
          aria-label="Full name"
        >
        <button class="btn bg-yellow-400" type="submit">
          Submit
        </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Email',
  data: () => ({
    email: ''
  }),
  methods: {
    submitEmail () {
      this.$store.commit('addEmail', this.email)
      this.$router.push('/select')
    }
  }
}
</script>

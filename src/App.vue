<template>
  <div id="app">
    <div id="nav" class="text-right p-8">
      <router-link to="/">Home</router-link>
      <router-link to="/list">List</router-link>
      <div class="pt-5 text-right text-white">
        Email: <span class="text-yellow-400">{{ email || "Nil" }}</span>
        <p><router-link to="/email">Change</router-link></p>
      </div>
    </div>
    <main class="mt-16">
      <router-view/>
    </main>
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'

export default {
  name: 'app',
  computed: {
    email () {
      return this.$store.state.email
    }
  }
}
</script>

<style>

body {
  @apply m-0 font-body
}

*,
*::after,
*::before {
  box-sizing: border-box
}

#app {
   background: linear-gradient(180deg, rgba(37, 35, 22, 0.82) 99.99%,
               rgba(255, 255, 255, 0) 100%),
                url('./assets/background.jpg');
    @apply bg-center bg-repeat bg-cover min-h-screen min-w-full text-gray-700
}

#nav a {
  @apply text-white uppercase mx-3
}

#nav a:hover {
  @apply text-yellow-400
}

#nav p a {
  @apply capitalize underline
}

#nav a.router-link-exact-active {
 @apply text-yellow-400
}

.btn {
  @apply text-white py-2 px-4 rounded;
}

.btn:focus {
  outline: none
}

.box {
  @apply max-w-lg mx-auto flex-col bg-white shadow-xl mt-6 rounded-lg;
}
</style>

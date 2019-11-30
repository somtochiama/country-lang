<template>
  <div class="list box p-6 md:p-12">
    <h2 class="text-center">List of all emails and their queries</h2>
    <country-table :emails="emails"/>
  </div>
</template>

<script>
import CountryTable from '@/components/CountryTable'
export default {
  name: 'List',
  components: {
    CountryTable
  },
  computed: {
    emails () {
      return this.$store.state.emails
    }
  }
}
</script>

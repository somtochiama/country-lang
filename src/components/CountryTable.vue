<template>
  <div class="mt-3 border-t border-b">
      <div class="overflow-y-auto scrollbar-w-2">
        <table class="table-auto table-collapse text-left w-full">
          <thead>
            <tr>
              <th class="p-2 font-semi-bold">Email</th>
              <th class="p-2 font-semi-bold">Queries(Code)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(queries, email) in emails" :key="email">
              <td class="p-2 border-t" >{{ email }}</td>
              <td class="p-2 border-t" >
                <span v-for="(query, i) in queries" :key="i">{{query}} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CountryTable',
  props: {
    emails: Object
  }
}
</script>

<template>
   <div>
      Group     Index | PassRecord | Restaurant Recommend | User: stacy chen | Logout
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default{
  name: 'Menu',
  computed: mapGetters([
      'evenOrOdd'
    ]),
  methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
  ])


</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
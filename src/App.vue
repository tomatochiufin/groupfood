<template>
  <div id="app">
    <month></month>
    <group></group>
    <un-group></un-group>
  </div>
</template>

<script>
import Month from './components/Month.vue'
import Group from './components/Group.vue'
import UnGroup from './components/UnGroup.vue'


export default {
  components: {
    Month,
    Group,
    UnGroup
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

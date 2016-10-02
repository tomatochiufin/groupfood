<template>
  <div id="app">
    <navigator></navigator>
    <month></month>
    <group></group>
    <un-group></un-group>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'
import Month from './components/Month.vue'
import Group from './components/Group.vue'
import UnGroup from './components/UnGroup.vue'


export default {
  components: {
    Navigator,
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

<template>
  <div id="app">
    <group></group>
    <un-group></un-group>
  </div>
</template>

<script>
import Group from './components/Group.vue'
import UnGroup from './components/UnGroup.vue'


export default {
  components: {
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

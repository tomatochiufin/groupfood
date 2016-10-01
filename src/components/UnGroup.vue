<template>
  <div>
    <div v-for="person in $store.state.ungroup">
        <p>{{person.name}}</p>
        <select>
          <option v-for="group in $store.state.groups">
            {{group.restaurant}}
          </option>
        </select>
        <button type="button">入團</button>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default{
  name: 'UnGroup'
}
</script>
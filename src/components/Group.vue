<template>
  <div>
      Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
          <button @click="incrementIfOdd">Increment if odd</button>
          <button @click="incrementAsync">Increment async</button>


    <div v-for="group in $store.state.groups">
      <h2>{{ group.restaurant }}</h2>
      <ul>
        <li v-for="person in group.participant">{{person.name}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default{
  name: 'Group',
  computed: mapGetters([
      'evenOrOdd'
    ]),
  methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
  ])

}

</script>
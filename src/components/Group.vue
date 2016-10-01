<template>
  <div>
      Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
          <button @click="incrementIfOdd">Increment if odd</button>
          <button @click="incrementAsync">Increment async</button>


    <div class="groupWrap" v-for="group in $store.state.groups">
      <h2>{{ group.restaurant }}</h2>
      <p>{{ group.date }}</p>
      <ul>
        <li v-for="person in group.participant">
          <p :class = "{ contact: person.contact }">{{person.name}}</p>
        </li>
      </ul>
      <p>{{ group.note }}</p>
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

<style>
.groupWrap{
    background: pink;
}
.groupWrap .contact{
  color: red;
}
</style>
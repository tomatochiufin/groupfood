<template>
  <div>
    <h1>Group Food</h1>
    <h2>{{$store.state.thisMonth}}月聚餐</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default{
  name: 'Month',
  methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
  ])

}

</script>
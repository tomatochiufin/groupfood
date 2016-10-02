<template>
  <div>
    <ul>
      <li>Logo</li>
      <li>This Month</li>
      <li @click="signIn">User Login</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default{
  name: 'Navigator',
  methods: mapActions([
        'signIn'
    ])

}

</script>
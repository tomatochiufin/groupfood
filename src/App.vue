<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div v-for="group in groups">
        <h2>{{ group.restaurant }}</h2>
        <ul>
            <li v-for="person in group.participant">{{person.name}}</li>
        </ul>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Group Food!',
      groups: [
        {
          restaurant: '添好運',
          participant: [{name: 'stacy chen'}, {name: 'yingray lu'}, {name: 'pompom huang'}]
        },
        {
          restaurant: '點點心',
          participant: [{name: 'liz cheng'}, {name: 'Gary Chung'}, {name: 'Amber ou'}]
        },
        {
          restaurant: 'UnGroup',
          participant: [{name: 'Jerry Chen'}, {name: 'Nicky Chen'}, {name: 'Mike chen'}]
        },
      ]
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

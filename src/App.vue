<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div v-for="group in groups">
        <h2>{{ group.restaurant }}</h2>
        <ul>
            <li v-for="person in group.participant">{{person.name}}</li>
        </ul>

    </div>
    <div v-for="person in ungroup">
        <p>{{person.name}}</p>
        <select>
            <option v-for="group in groups">
                {{group.restaurant}}
            </option>
        </select>
        <button type="button">入團</button>
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
          participant: [{name: 'stacy chen'}, {name: 'yingray lu'}, {name: 'pompom huang'}],
          remain: 0
        },
        {
          restaurant: '點點心',
          participant: [{name: 'liz cheng'}, {name: 'Gary Chung'}, {name: 'Amber ou'}],
          remain: 1
        },
        {
          restaurant: '花酒藏',
          participant: [{name: 'Jerry Chen'}, {name: 'Nicky Chen'}, {name: 'Mike chen'}],
          remain: 2
        },
      ],
      ungroup: [
        {
          name: 'Kiki Huang',
          status: 'no_group'
        },
        {
          name: 'Javan',
          status: 'leave'
        }
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

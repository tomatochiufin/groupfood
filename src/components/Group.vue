<template>
  <div>
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
export default{
  name: 'Group',
  data:()=>{
    return {
          msg: 'Group Food!',
          hello: {
            world: "how are you"
          },
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
    }
  },
  methods: {
    test:function(){
             console.log("hello world");
           }
  }

}

</script>
<template>
  <div v-on:click="test">Hello World!</div>
</template>

<script>
export default{
  name: 'Group',
  methods: {
    test:function(){
             console.log("hello world");
           }
  }

}

</script>
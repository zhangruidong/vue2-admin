<template>
  <div>
    table1
  </div>
</template>

<script>
  export default {
    name: 'table1',
    created(){
      this.$store.dispatch("getUserList").then( res => {
        console.log(res);
      })
    },
    data(){
      return {

      }
    }
  }
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getUserList () {
      this.$http.get('/api/users/list').then((reseponse) => {
        console.log(reseponse)
        var res = reseponse.data
        if (res.status === 10000) {
          this.msg = res.result.list
        }
      })
    }
  },
  created () {
    this.getUserList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

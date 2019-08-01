<template>
  <div class="hello">

    <h2>添加页面</h2>
    <ul>
      <li :key="index" v-for="(l,index) in pdata.thisweek">{{++index}}.{{l}}</li>
    </ul>
    <form>
      <label for="">任务:</label>
      <input type="text" v-model.trim="tmp">
      <button @click.prevent='handleClick'>添加</button>
      <button @click.prevent='getClick'>查看</button>
    </form>

  </div>
</template>

<script>

export default {
  name: 'PersonAdd',
  data () {
    return {
      NO: 0,
      pdata: {
        'user': '',
        'date': '',
        'lastweek': [],
        'thisweek': [],
        'status': ''
      },
      wdata: [],
      tmp: ''

    }
  },
  methods: {
    handleClick: function () {
      this.wdata.push(this.tmp)
      this.tmp = ''
      this.$set(this.pdata, 'thisweek', this.wdata)

      this.$http({
        url: '/api/list/update',
        method: 'post',
        transformRequest: [function (data) {
          data = JSON.stringify(data)
          return data
        }],
        data: {
          thisweek: this.wdata
        }
      })
    },
    getClick: function () {
      this.$http.get('/api/list/get').then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {

    list-style-type: none;
    padding: 0;
  }

  li {

    margin: 0 10px;
    text-align: left
  }

  li:hover {
    background-color: #eee;
    cursor: pointer;
  }

  a {
    color: #42b983;
  }

  input {
    width: 400px
  }
</style>

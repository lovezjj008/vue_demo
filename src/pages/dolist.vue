<!--  -->
<template>
  <div>
    <h1>DOLIST</h1>
    <div class = "row" style="margin-bottom: 10px">
      <div class = "col-md-3">
        <input type="text" class = "form-control" v-model="name">
      </div>
      <div class = "col-md-1">
        <button type="botton" class = "btn btn-default" @click="addlist">确定</button>
      </div>
    </div>
    <div class = "row">
      <div class = "col-md-4">
        <!-- <dolist-iteam :list = "list" @delrow = "delrow"></dolist-iteam> -->
         <ul class="list-group " >
      <li class="list-group-item clearfix" v-for="(row, index) in list" :key = "index">
        <span class = "pull-left">{{row.name}}</span>
        <a class = "pull-right" @click="delrow(row, index)">删除</a>
      </li>
    </ul>
      </div>
    </div>
  </div>
</template>

<script>
var wid = 5;
var list = [
  {'id': 1, 'name': '11111'},
  {'id': 2, 'name': '2222'},
  {'id': 3, 'name': '33333'},
  {'id': 4, 'name': '44444'},
]
import dolistIteam from '@/components/listiteam'
export default {
  name: 'dolist',
  data () {
    return {
      name: '',
      list: list
    }
  },
  components: {
    dolistIteam
  },
  mounted () {},
  computed: {},
  methods: {
    addlist () {
      if (!this.name) {
        return
      }
      wid++
      var iteam = {
        id: wid,
        name: this.name
      }
      this.list.push(iteam)
    },
    delrow (row, index) {
      this.list.splice(index, 1);
    }
  }
}
</script>

<style lang='css' scoped>
</style>
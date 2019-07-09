<!--  -->
<template>
  <div>
    <h1>page2</h1>
      <h2>数据渲染：v-text、v-html、{{}}, v-model</h2>
      <div>
        <div v-text="data1"></div>
        <div >{{data1}}</div>
        <div v-html="data2"></div>
        <input type="text" v-model="data1">
        <span>{{data8}}</span>
      </div>
      <h2>渲染循环列表：v-for</h2>
      <!-- <ul>
        <li v-for= "(iteam, index) in data3" :key= "index">
          {{iteam.name}}
        </li>
      </ul> -->
      <table class = 'table'>
        <tthead>
          <th>boianm a</th>
          <th>id</th>
           <th>iname</th>
        </tthead>
        <tbody>
          <tr  v-for= "(iteam, index) in data3" :key= "index">
            <td>{{index}}</td>
            <td>iteam.id</td>
             <td>iteam.name</td>
          </tr>
        </tbody>
      </table>
      <h2>属性绑定：v-bind </h2>
      <div :class="{ active: isActive }">属性绑定：v</div>
      <h2>控制模板隐藏：v-if、v-show</h2>
      <div v-if= "!isActive">show</div>
      <div v-show= "!isActive">show2</div>
      <h2>事件指令：v-on</h2>
      <div><button class = "btn btn-default" @click= "clickFn('data22', $event)">按钮</button></div>
      <div>
        child组件
        <child :cdata = "cdata" @changeval = "changeval"></child>
      </div>
      <h3>新浪服务</h3>
      <ul>
        <li v-for= "(iteam, index) in datalist" :key= "index">
          <a :href="iteam.url" target="blank">{{iteam.title}}</a>
        </li>
      </ul>
      <div><span>子路由</span>     <router-link :to="{'path': '/dolist', query: {'id': '1234'}}">dolist</router-link></div>
      <div style="height: 200px">
         <router-view/>
      </div>
  </div>
</template>

<script>
var list = [
  {id:1, name: 'zhang1'},
  {id:2, name: 'zhang2'},
  {id:3, name: 'zhang3'},
  {id:4, name: 'zhang4'}
];
import child from '@/components/child';
import $ from 'jquery';
export default {
  data () {
    return {
      data1: 'zhang3',
      data2: '<div>ddddddd</div>',
      data3: list,
      isActive: true,
      cdata: '父元素的值',
      datalist: []
    }
  },
  components: {
    child
  },
  mounted () {
    this.queryData();
    // =>
    var self = this;
    // window.setInterval(() => {
    //   this.data3.push( {id:5, name: 'zhang5'})
    // }, 10);

  },
  watch: {
    
  },
  computed: {
    data8 () {
      return this.data1 + 'ooooo';
    }
  },
  methods: {
    clickFn: function (data, ev) {
      var lsit2 = {id:5, name: 'zhang5'}
      // this.data3.push(lsit2)
      this.cdata = "33333333"
      this.queryData()
    },
    changeval (val) {
      this.cdata = val
    },
    queryData () {
      var self = this;
      $.get('/api/hotword.json', function (data) {
        self.datalist = data.result.data
      })
    }
  }
}
</script>

<style lang='css' scoped>
  .active {
    height: 20px;
    width: 50px;
    background: red;
  }
</style>


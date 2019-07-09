<!-- kist -->
<template>
  <div>
    <ul class="list-group " >
      <li class="list-group-item clearfix" v-for="(row, index) in list" :key = "index">
        <span class = "pull-left">{{row.name}}</span>
        <a class = "pull-right" @click="delrow(row, index)">删除</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['list'],
  components: {},
  mounted () {},
  computed: {},
  methods: {
    delrow (row, index) {
      this.$emit('delrow', row, index)
    }
  }
}
</script>

<style lang='css' scoped>
</style>
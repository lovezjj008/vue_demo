<!-- child -->
<template>
  <div>
    <h1>child</h1>
    <div>{{cdata}}</div>
    <button @click="changeval">change</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['cdata'],
  components: {},
  mounted () {
    
  },
  watch: {},
  computed: {},
  methods: {
    changeval () {
      this.$emit('changeval', 'dsdfasdfasf')
    }
  }
}
</script>

<style lang='css' scoped>
</style>
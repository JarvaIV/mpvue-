<template>
    <div class="rate">
        <span>☆☆☆☆☆</span>
        <div class="hollow" :style='style'>★★★★★</div>
    </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: '0'
    }
  },
  computed: {
    style () {
      return `width:${this.value / 2}em`
    }
  }
}
</script>
<style lang="scss" scoped>
.rate{
    position: relative;
    display: inline-block;
    .hollow{
        display: inline-block;
        position: absolute;
        width: 0;
        left: 0;
        top: 0;
        overflow: hidden;
    }
}
</style>


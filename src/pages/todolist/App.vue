<template scope='scope'>
    <div>
        <h1>vueJs is good</h1>
        <todolist></todolist>
    </div>
</template>
<script>
import Todolist from '@/components/Todolist'

export default {
  components: {
    Todolist
  }
}
</script>
<style>
h1 {
  color: red;
}
</style>


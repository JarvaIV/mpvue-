<script>
import wHttp from './util'
// import {get} from './util'

export default {
  async created () {
    const res = await wHttp.Get('/webapp/demo')
    // const res = await get('/webapp/demo')
    console.log(13, res)
    console.log('小程序启动了')
  }
}
</script>









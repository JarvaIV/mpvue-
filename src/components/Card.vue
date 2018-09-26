<template>
    <a :href="detailUrl">
    <div class="book-card">
        <div class="thumb">
            <img :src="book.image" class='img' mode='aspectFit'>
        </div>
        <div class="detail">
            <div class="row text-primary">
                <div class="right">
                    {{book.rate}} <Rate :value='book.rate'></Rate>
                </div>
                <div class="left">
                    {{book.title}}
                </div>
            </div>
              <div class="row ">
                <div class="right">
                      浏览量：
                </div>
                <div class="left">
                   {{book.author}}
                </div>
            </div>
             <div class="row">
                <div class="right">
                      {{book.user_info.nickName}}
                </div>
                <div class="left">
                    {{book.publisher}}
                </div>
             </div>
        </div>
    </div>
    </a>
</template>
<script>
import Rate from "@/components/Rate";
export default {
  components: {
    Rate
  },
  props: ["book"],
  computed: {
    detailUrl(){
      return '/pages/bookdetail/main?id='+this.book.id
    }
  }
};
</script>
<style lang="scss" scoped>
.book-card {
  font-size: 14px;
  padding: 5px;
  overflow: hidden;
  margin: 5px 0 5px;
  .thumb {
    width: 90px;
    height: 90px;
    overflow: hidden;
    float: left;
    margin: 0 auto;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    margin-left: 100px;
    .row {
      margin-bottom: 3px;
      line-height: 20px;
    }
    .right {
      float: right;
      margin-right: 5px;
    }
    .left {
      margin-right: 80px;
    }
  }
}
</style>



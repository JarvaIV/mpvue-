<template>
    <div>
        <Card :key="book.id" v-for="book in bookList" :book='book'></Card>
        <p v-show="!more" class="text-footer">没有更多数据！</p>
    </div>
</template>
<script>
import { get } from "@/util";
import Card from "@/components/Card";
export default {
  data() {
    return {
      bookList: [],
      pageInfo: {
        page: 0,
        size: 10
      },
      more: true
    };
  },
  components: {
    Card
  },
  methods: {
    async getList(init) {
      if (init) {
        this.pageInfo.page = 0;
        this.more = true;
      }
      wx.showNavigationBarLoading();
      const books = await get("/weapp/booklist", {
        page: this.pageInfo.page,
        size: this.pageInfo.size
      });
      if (books.list.length < 10 && books.list.length > 0) {
        this.more = false;
      }
      if (init) {
        this.bookList = books.list;
        wx.stopPullDownRefresh();
      } else {
        // 下拉刷新 增加是数据
        this.bookList = this.bookList.concat(books.list);
      }
      wx.hideNavigationBarLoading();
    }
  },
  onPullDownRefresh() {
    this.getList(true);
  },
  onReachBottom() {
    if (!this.more) {
      return;
    }
    this.pageInfo.page = Math.ceil(this.bookList.length / this.pageInfo.size);
    this.getList();
  },
  mounted() {
    this.getList(true);
  }
};
</script>


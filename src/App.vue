<template>
  <div id="app">
    <Header />
    <AddWish v-on:add-wish="addWish" />
    <Wishes v-bind:wishes="wishes" v-on:del-wish="deleteWish" />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Wishes from './components/Wishes';
import AddWish from './components/AddWish';
export default {
  name: 'app',
  components: {
    Header,
    Wishes,
    AddWish
  },
  data() {
    return {
      wishes: [
        {
          id: 1,
          title: "iPad Pro",
          completed: false
        },
        {
          id: 2,
          title: "iPhone Xs Max",
          completed: true
        },
        {
          id: 3,
          title: "Mac Pro",
          completed: false
        }
      ]
    }
  },
  methods: {
    deleteWish(id) {
      this.wishes = this.wishes.filter(wish => wish.id !== id);
    },
    addWish(newWish) {
      this.wishes = [...this.wishes, newWish];
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1,4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  .btn:hover {
    background: #666;
  }
</style>
<template>
  <div class="wish-item" v-bind:class="{'is-complete':wish.completed}">
    <p>
    <input type="checkbox" v-on:change="markComplete">
    {{wish.title}}
    <button @click="$emit('del-wish', wish.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "WishItem",
  props: ["wish"],
  methods: {
    markComplete() {
      this.wish.completed = !this.wish.completed;
    }
  }
}
</script>

<style scoped>
  .wish-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>

<template>
  <div class="theo-item" v-bind:class="{'is-complete':theo.completed}">
    <p>
    <input type="checkbox" v-on:change="markComplete">
    {{theo.title}}
    <button @click="$emit('del-theo', theo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "theoItem",
  props: ["theo"],
  methods: {
    markComplete() {
      this.theo.completed = !this.theo.completed;
    }
  }
}
</script>

<style scoped>
  .theo-item {
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

<template>
  <div>
    <form @submit="addWish">
      <input type="text" v-model="title" name="title" placeholder="Add Wish...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';
export default {
  name: "AddWish",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addWish(e) {
      e.preventDefault();
      const newWish = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      }
      // Send up to parent
      this.$emit('add-wish', newWish);
      this.title = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"]{
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>

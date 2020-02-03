<template>
  <div>
    <form @submit="addtheo">
      <input type="text" v-model="title" name="title" placeholder="Add theo...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';
export default {
  name: "Addtheo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addtheo(e) {
      e.preventDefault();
      const newtheo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      }
      // Send up to parent
      this.$emit('add-theo', newtheo);
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

<template>
  <div id="app">
    <Header/>
    <Addtheo v-on:add-theo="addtheo"/>
    <theoes v-bind:theoes="theoes" v-on:del-theo="deletetheo"/>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import theoes from "./components/theoes";
import Addtheo from "./components/Addtheo";

export default {
  name: "app",
  components: {
    Header,
    theoes,
    Addtheo
  },
  data() {
    return {
      theoes: [
        {
          id: 1,
          title: "Theo 1",
          completed: false
        },
        {
          id: 2,
          title: "theo 2",
          completed: false
        },
        {
          id: 3,
          title: "Theo 3",
          completed: true
        }
      ]
    };
  },
  methods: {
    deletetheo(id) {
      this.theoes = this.theoes.filter(theo => theo.id !== id);
    },
    addtheo(newtheo) {
      this.theoes = [...this.theoes, newtheo];
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1, 4;
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

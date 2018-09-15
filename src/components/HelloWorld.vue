<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h2>Not logged in yet?</h2>
      <button type="button" @click="meLogin">Login</button>
    </div>
  </div>
</template>

<script>
import { login } from '../utils/auth';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
  	meLogin() {
        login();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="!isLoggedIn">
      <h2>Not logged in yet?</h2>
      <button type="button" @click="meLogin">Login</button>
    </div>
    <div v-else>
      <h2>Hello, {{ userProfile.name }}! Welcome to the Admin Page!</h2>
      <img alt="Profile Picture"
           :src="userProfile.picture"
           v-if="userProfile.picture !== null"
           :style="imgWidth"> <br/>
      <button type="button" @click="meLogout">Logout</button>
    </div>
  </div>
</template>

<script>
import MY_AUTH from '../utils/auth';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      isLoggedIn: MY_AUTH.isLoggedIn(),
      userProfile: MY_AUTH.getProfile(),
      imgWidth: {
        'width': '10%',
        'border-radius': '50%'
      }
    };
  },
  methods: {
    meLogin() {
      MY_AUTH.login();
    },
    meLogout() {
      MY_AUTH.logout();
      this.isLoggedIn = false;
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

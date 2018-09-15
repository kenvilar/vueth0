<template>
    <div class="callback">
        <h1>Callbacking stuff...</h1>
    </div>
</template>

<script>
import MY_AUTH from '../utils/auth';

export default {
  name: 'Callback',
  beforeMount() {
    MY_AUTH.handleAuth((err) => {
      if (err) {
        console.log(err);
        return;
      }

      this.$router.push('/secret');
    });
  },
  methods: {

  }

}
</script>
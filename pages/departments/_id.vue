<template>
  <h1>  {{ id }}</h1>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  async asyncData({params}) {
    return { id: params.id }
  }
}
</script>

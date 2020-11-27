<template>
    <div>
        <h1>{{ name }}</h1>
        <button @click="test">bezan</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        test() {
            this.$emit('kir', this.name)
        }
    }
}
</script>
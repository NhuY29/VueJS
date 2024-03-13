<template>
    <input :type="type" :placeholder="placeholder" v-model="inputvalue" />
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            inputvalue: ''
        }
    },
}
</script>
<style scoped>
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; 
}
</style>
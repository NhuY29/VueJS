<template>
    <button :class="buttonClass" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonClass: {
        type: String,
        default: ""
      }
    },
    methods: {
      handleClick() {
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    width:100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
button:hover {
    background-color: gray; 
}
  </style>
  
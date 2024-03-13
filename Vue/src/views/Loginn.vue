<template>
    <form>
        <h1>Login</h1>
        <Input type="text" placeholder="Username" v-model="Username"/>
        <Input type="password" placeholder="Password" v-model="Password"/>
        <Button type="button" @click="handleClick">Login</Button>
    </form>
</template>
<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
export default {
    components: {
        Input,
        Button
    },
    data() {
        return {
            Username: '',
            Password: ''
        }
    },
    methods: {
        handleClick() {
            console.log("Username:",this.Username);
            console.log("Password:",this.Password);
        }
    }
}
</script>
<style>
form {
    width: 300px;
    height: 300px;
    background-color: lightgray;
    border: 1px solid black; 
    border-radius: 5px; 
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
}


input {
    margin-bottom: 10px;
    padding: 8px; 
    border-radius: 5px; 
    border: 1px solid #ccc; 
    width: calc(100% - 16px); 
}

h1 {
    text-align: center; 
    padding: 20px;
}

button {
    margin-top: 10px;
    width: calc(100% - 16px);
}

</style>
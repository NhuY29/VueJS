<template>
    <form >
        <h1>Login</h1>
        <div>
            <label>UserName:</label>
            <input required type="text" name="username" v-model="username"/>
        </div>
        <div>
            <label>Password:</label>
            <input required type="password" name="password" v-model="password" />
        </div>
        <button  type="button" @click="handleSubmit">Submit</button>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            handleSubmit(){
               console.log("Username: ", this.username);
               console.log("Password: ", this.password);
            }
        }
    }
</script>
<style>
    form{
        width: 400px;
        height:300px;
        border: 1px solid black;
    }
    button{
        width: 100%;
        height: 15%;
        margin-top: 10px;
        background-color: black;
        color: #ccc;

    }
    label {
        display: block;
        margin-bottom: 5px;
    }

    input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    }
    h1{
        text-align: center;
    }
</style>
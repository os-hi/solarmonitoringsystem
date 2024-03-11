<script setup lang="ts">

</script>

<template>
    <div class="container">
        <h1>User Login</h1>
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="username">
            <label for="password">Password</label>
            <input type="text" id="password" placeholder="password">
            <input type="checkbox" name="showPassword" id="showPassword">
            <button type="submit">Login</button>
        </form>
        <h1>Don't have an account yet? <a href="/register">Register</a></h1>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid black;
}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
input{
    padding: 8px;
    border-radius: 15px;
}
</style>
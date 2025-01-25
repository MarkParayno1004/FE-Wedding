<script lang="ts">
import {createUser, getUsers} from "../../Controller/UserController";

let firstName: string, lastName: string, email: string, password: string;
let users = getUsers();

const registerUser = () => {
    if(firstName && lastName && email){
        const newUser = createUser(firstName, lastName, email, password);  
        users = getUsers();
        firstName = '';
        lastName = '';
        email = '';
        password = '';
    }else{
        alert('Please fill out all fields!');
    }
}
</script>

<main>
    <form on:submit={registerUser}>
        <h3>Regsiter a User</h3>
        <input type="text" placeholder="First Name" bind:value={firstName}>
        <input type="text" placeholder="Last Name" bind:value={lastName}>
        <input type="email" placeholder="Email" bind:value={email}>
        <input type="password" placeholder="Password" bind:value={password}>
        <button>Register</button>
    </form>
</main>
<script>
    export default {
        name: 'profile',
        data () {
            return {
                objective: 'Seeking a Web Development position to support business growth',
                name: 'Joemar S. Catipon',
                course: 'BSIT',
                specialization: 'Web Development',
                age : 20
            };
        }
    }
</script>

<template>
    <div id="profile">
        <div id="todo-card">
            <div class="container">
                <div class="alert alert-primary">
                    <h2>Objective: {{ objective }}</h2>
                    <p>Name: {{ name }}</p>
                    <p>Course: {{ course }}</p>
                    <p>Specialization: {{ specialization }}</p>
                    <p>Age: {{ age }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .profile-img {
        display: block;
        margin: 0 auto ;
        margin-bottom: 20px;
    }

    .container {
        width: 750px;
    }

    p {
        font-size: 25px;
    }
</style>
<script>
    export default {
        name: 'education',
        data () {
            return {
                elementary: 'San Francisco Elementary School',
                jhighschool: 'Doña Asuncion Lee Integrated School',
                shighschool: 'Children of Fatima School Inc',
                college: 'Holy Angel University'
            };
        }
    }
</script>

<template>
    <div id="education">
        <div id="todo-card">
            <div class="container">
                <div class="alert alert-primary">
                    <h2>Education</h2>
                    <p>Elementary: {{ elementary }}</p>
                    <p>Junior High School: {{ jhighschool }}</p>
                    <p>Senior High School: {{ shighschool }}</p>
                    <p>College: {{ college }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .container {
        width: 750px;
    }

    p {
        font-size: 25px;
    }
</style>
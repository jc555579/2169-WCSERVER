<script>
    export default {
        name: 'skills',
        data () {
            return {
                seminars: ['Introduction to WEB 101: Code Geeks', 'GIT IT DONE: Code Geeks'],
                technologies: ['React.js', 'Express.js', 'Git', 'Docker'],
                programmingLanguage: ['JavaScript', 'Java']
            };
        }
    }
</script>

<template>
    <div id="skills">
        <div id="todo-card">
            <div class="container">
                <div class="alert alert-primary">
                    <h2>Skills</h2>
                    <p>Seminars: {{ seminars }}</p>
                    <p>Technologies: {{ technologies }}</p>
                    <p>Programming Languages: {{ programmingLanguage }}</p>
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
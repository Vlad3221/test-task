<template>
    <section>
        <div class="container flexer">
            <div class="comment-messages" v-for="data in result">
                <div class="comment-messages--header">
                    <ul >
                        <li>Name: {{data.name}}</li>
                        <li>eMail: {{data.email}}</li>
                        <li>Messages: {{data.body}}</li>
                    </ul>
                </div>
                <nuxt-link :to="'/1'" class="goBack">Go to first page</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script lang="js" src="./index.js"></script>
<style lang="scss" scoped src="./index.scss"></style>
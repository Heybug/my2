<template>
    <div class="find">
        <h2 v-if="xxx" @click="aa">{{chatName}}</h2>
    </div>
</template>
<script>
    export default {
        name: 'chat',
        data () {
            return {
                chatName: '我是chat'
            }
        },
        props: {
            xxx: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            aa: function () {
                $.alert("1");
            }
        }
    }
</script>
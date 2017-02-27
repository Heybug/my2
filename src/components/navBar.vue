<template>
    <div class="nav-bar">
        <p class="title">{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',
        data () {
            return {
                title: '微信'
            }
        }
    }
</script>

<style>
    .nav-bar {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #42b983;
    }

    .nav-bar .title {
        color: #fff;
    }

</style>
<template>
    <div class="my">
        <h2>这是我的资料</h2>
        <img src="http://note.img-cn-hangzhou.aliyuncs.com/image/2/checkpoint/8fb42177fbaf0ef5733f23e23e416270.jpg?x-oss-process=style/trips_head" alt="">
        <router-link to="/my">返回</router-link>
    </div>
</template>

<script>
    export default {
        name: 'my',
        data () {
            return {
                title: '我就是我'
            }
        }
    }
</script>

<style>

</style>
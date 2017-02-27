<template>
    <div class="foot-bar">
        <router-link v-for="nav in navList" :to="nav.href" message="hello!">{{message}}{{nav.name}}</router-link>
    </div>
</template>

<script>
    export default {
        name: 'footBar',
        data () {
            return {
                navList: [
                    {
                        name: '微信',
                        href: '/chatList'
                    },
                    {
                        name: '通讯录',
                        href: '/contacts'
                    },
                    {
                        name: '发现',
                        href: '/find'
                    },
                    {
                        name: '我',
                        href: '/my'
                    }
                ]
            }
        },
        props: ['message'],
        methods: {
            aa: function () {
                $.alert("1");
            }
        }
    }
</script>

<style>
    .foot-bar {
        display: flex;
        justify-content: space-around;
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #42b983;
    }

    .foot-bar a {
        color: #fff;
        text-decoration: blink;
    }
</style>

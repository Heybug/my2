<template>
    <div id="app">
        <navBar></navBar>

        <router-view></router-view>

        <footBar></footBar>
    </div>
</template>

<script>
    import "./css/weui.min.css"
    import "./css/jquery-weui.min.css"
    import "./css/app.css"
    import './js/jquery-2.1.4'
    import './js/jquery-weui.min'
    import navBar from './components/navBar'
    import footBar from './components/footBar'

    export default {
        name: 'app',
        data () {
            return {
                title: 'hello vue',
                footText: 'foot bar',
            }
        },
        components: {
            navBar, footBar
        }

    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        color: #42b983;
    }

    img {
        width: 100%;
    }

    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>

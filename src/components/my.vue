<template>
    <div class="my">
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="http://note.img-cn-hangzhou.aliyuncs.com/image/2/checkpoint/4d959ecb6d72c3d519cc77b68b746d95.jpg?x-oss-process=style/trips_item_photo" alt="" style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="weui-cell__bd">
                    <p>标题文字</p>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="http://note.img-cn-hangzhou.aliyuncs.com/image/2/checkpoint/4d959ecb6d72c3d519cc77b68b746d95.jpg?x-oss-process=style/trips_item_photo" alt="" style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="weui-cell__bd">
                    <p>标题文字</p>
                </div>
            </div>
        </div>
        <router-link to="/my/info">查看资料</router-link>
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
    #app {
        /*background: #eee;*/
    }

    .my, .weui-cells {
        background: #eee;
    }

    .weui-cell {
        background: #fff;
    }
</style>
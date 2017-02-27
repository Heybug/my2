<template>
    <div class="wechat">
        <div class="weui-cells">
            <div class="weui-cell" v-for="item in chatList.list">
                <div class="weui-cell__hd">
                    <!--<img src="http://note.img-cn-hangzhou.aliyuncs.com/image/2/checkpoint/4d959ecb6d72c3d519cc77b68b746d95.jpg?x-oss-process=style/trips_item_photo" alt="" style="width:20px;margin-right:5px;display:block">-->
                    <img :src="color()" alt="" style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="weui-cell__bd">
                    <p>{{item.name}}</p>
                    <p>{{item.chat}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var Mock = require('mockjs');

    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1
        }]
    });

    // 输出结果
    //    console.log(JSON.stringify(data, null, 4))
    var chatList = Mock.mock({
            'list|10-50': [
                {
                    'id|+1': 1,
                    'name': '@name',
                    'chat': '@color',
                }
            ]
        }
    );

    console.log(chatList.list[0].chat);

    export default {
        name: 'weChat',
        data () {
            return {
                title: '我是微信',
                chatList: chatList,
            }
        },
        methods: {
            color: function () {
                return Mock.Random.image('50x50', Mock.Random.color())
            }
        }
    }
</script>

<style>
    .wechat {
        margin-bottom: 50px;
    }

    .weui-cells {
        margin-top: 0;
    }

    .weui-cell__hd img {
        width: 50px !important;
    }

    .weui-cell__bd p {
        font-size: 14px;
    }
</style>
<template>
    <div class="wechat">
        <div class="weui-cells">
            <router-link class="weui-cell" v-for="item in chatList.list" @click="funChat(item.chat,item.name)" to="/chatList/chat">
                <div class="weui-cell__hd">
                    <img :src="item.img" alt="" style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="weui-cell__bd">
                    <p>{{item.name}}</p>
                    <p class="chat">{{item.chat}}</p>
                </div>
                <div class="weui-cell__r">
                    <p class="chat-time">{{item.time}}</p>
                    <p></p>
                </div>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import '../less/chatList.less'

    import chat from '../components/chat'

    var Mock = require('mockjs');
    var chatList = Mock.mock({
            'list|1-20': [
                {
                    'id|+1': 1,
                    'name': '@cname(2,3)',
                    'chat': '@cparagraph(1,2)',
                    'img': '@dataImage(50x50)',
                    'time': '@datetime("H:m")'
                }
            ]
        }
    );

    export default {
        name: 'weChat',
        data () {
            return {
                chatName: 'hello',
                chatList: chatList
            }
        },
        components: {
            chat
        },
        props: {
            xxx: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            funChat: function (chat, name) {
                this.$route.params.chat;
            },
            aa: function () {
                $.alert("1");
            }
        }
    }
</script>
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import chatList from '@/components/chatList'
import chat from '@/components/chat'
import contacts from '@/components/contacts'
import find from '@/components/find'
import my from '@/components/my'
import info from '@/components/info'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: home,
            children: [
                {
                    path: 'chatList',
                    component: chatList,
                },
                {
                    path: 'contacts',
                    component: contacts,
                },
                {
                    path: 'find',
                    component: find,
                },
                {
                    path: 'my',
                    component: my,
                },
            ]
        },
        {
            path: '/my/info',
            component: info
        },
        {
            path: '/chatList/chat',
            component: chat,
        }
    ]
});

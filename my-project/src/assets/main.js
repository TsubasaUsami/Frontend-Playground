var app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                no: 1,
                name: 'タスク管理ツール',
                icon: 'm_task',
                link: '/task_management',
                summary: '自分が抱えている現状の課題を整理し、それぞれの優先度や作業の進捗を可視化するためのツールです。',
                img: './img/dashboard/pc_task_thumbnail01.png',
                spImg: './img/dashboard/sp_task_thumbnail01.png',
                update: '2019.06.20'
            }, {
                no: 2,
                name: '貸し借りチェッカー',
                icon: 'm_rental',
                // link: '/rental_checker',
                summary: '自分が貸しているものや、他人から借りているものをひと目で確認することができるツールです。',
                img: './img/dashboard/pc_task_thumbnail01.png',
                spImg: './img/dashboard/sp_task_thumbnail01.png',
                // update: '2019.06.19'
            }
        ],
        notifications: [
            {
                no: 1,
                text: '期日が超過しているタスクが5件あります。',
                important: true
            }, {
                no: 2,
                text: '『<a href="/task_management" class="p_s02Link">タスク管理ツール</a>』サービスをリリースしました！'
            }, {
                no: 3,
                text: '『<a href="/task_management" class="p_s02Link">タスク管理ツール</a>』をアップデートしました。'
            }
        ]
    }
});
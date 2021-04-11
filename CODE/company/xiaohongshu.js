// 题目一
const template = "我是{{name}},年龄{{age}},性别{{sex}}";
const data = {
    name: '小山楂', 
    age: '18',
}

//实现函数：输出 我是小山楂，年龄18，性别undefined
render(template, data);


// 题目二
const input = [
    {
        province: '四川省',
        city: '成都市',
        country: '天府街道'
    },
    {
        province: '河南省',
        city: '信阳市',
        country: '浉河区'
    },
]

const output = [
    {
        type: 'province',
        name: '四川省',
        children: [{
            type: 'city',
            name: '成都市',
            children: [{
                type: 'country',
                name: '天府街道',
            }]
        }]
    },
    {
        type: 'province',
        name: '河南省',
        children: [{
            type: 'city',
            name: '信阳市',
            children: [{
                type: 'country',
                name: '浉河区',
            }]
        }] 
    }
]


// 问：mobx redux vuex 区别  ssr  12适配 重构方式 渲染 v8  性能打点
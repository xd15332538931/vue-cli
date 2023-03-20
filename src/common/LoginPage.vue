<template>
    <div class="login">
        <img :src="bgUrl" class="bg-img"/>
        <div class="login-form">
            <h1>用户登录</h1>
            <p>
                <label>用户名：</label>
                <input/>
            </p>
            <p>
                <label>密码：</label>
                <input/>
            </p>
            <button @click="login">登录</button>
        </div>
    </div>


</template>

<script>
import bg from '@/assets/bg.jpeg'
export default {
    name:'LoginPage',
    data(){
        return {
            bgUrl:bg 
        }
    },
    methods:{
        login(){
                this.getUser().then(res=>{
                    console.log('@res',res)
                    if(res=='1'){
                        this.$router.push({
                            name: "Main"
                        })

                    }
                })
            },
            getUser(){
                return new Promise((resole)=>{
                    ['1','2','3'].map(res=>{
                        console.log(res)
                    })
                    if(true){
                        resole('1')
                    }
                })
            }
    },
    created(){
        console.log('11221',process.env);
    }
}
</script>

<style lang="less" scoped>
 .login {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;

    .bg-img {
        // height: 100%;
        // width: 100%;
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 0px;
    }

    .login-form {
        position: absolute;
        top: 25%;
        left: 35%;
        width: 400px;
        height: 250px;
        border: 1px solid #ffffff;
        opacity: 1;
        background: #ffffff;
        border-radius: 10px;
        text-align: center;
    }
}

</style>

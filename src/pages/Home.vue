<template>
    <div class="hj-home">
            <NavBar></NavBar>

            <el-main style="box-sizing: border-box;padding: 10px 20px;">
                <router-view/>
            </el-main>


    </div>
</template>

<script>
    import   NavBar  from './navBar.vue';
    export default {
        name: "home",
        data() {
            return{
                
            }
        },
        filters: {

        },
        watch: {

        },
        created() {

        },
        methods: {

        },
        components:{
            NavBar
        }

    }
</script>

<style scoped>
   
</style>

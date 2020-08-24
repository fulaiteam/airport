<template>
    <div class="hj-home">
            <NavBar></NavBar>

<<<<<<< HEAD
            <el-main style="box-sizing: border-box;padding: 0px;">
=======
>>>>>>> b2c02571e09df98f22dc6a02ce602ef5b6fdce9e
                <router-view/>


            <Bottom></Bottom>

    </div>
</template>

<script>
    import   NavBar  from './navBar.vue';
    import   Bottom  from './bottom.vue';
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
            NavBar,
            Bottom
        }

    }
</script>

<style scoped>
   
</style>

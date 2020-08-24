<template>
    <div class="hj-home">
            <NavBar></NavBar>

                <router-view/>



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

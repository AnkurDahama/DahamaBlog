<template>
    <div id="diary-main-div">
        <h1> Mr. Diary </h1>
        <ul>
            <li v-for="(entry, index) in entries" :key="index">
                <router-link :to="'/diary/' + entry.id">
                {{entry.id}} | 
                {{entry.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Diary',
    data() {
        return {
            entries: [
            {
                id: 0,
                title: '',
                content: ''
            }
            ]  
        }
    },
    mounted() {
        axios.get('./test.json')
        .then(response=>(
            this.entries = response.data.entries
        ))
    }
}
</script>

<style scoped>

</style>

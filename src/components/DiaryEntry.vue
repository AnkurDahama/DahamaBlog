<template>
    <div id="DiaryEntryDiv">
        <h1> {{entry.title}} </h1>
        <div class = "content">
        <p v-html="entry.content">{{entry.content}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {

    name: 'DiaryEntry',
    data() {
        return {
            entry: [
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
            response.data.entries.forEach(en => {
                if(en.id == this.$route.params.id) {
                    this.entry = en;
                }
            })
            //this.entries = response.data.entries.entries
        ))
    }
}
</script>

<style scoped>
h1 {
    color: black;
    font-size: 3em;
    width: 70%;
}
</style>

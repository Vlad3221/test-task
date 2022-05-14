export default {
    name: 'content',
    data() {
        return {
            result: []
        }
    },
    mounted() {
        this.$axios.get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                id: this.$route.params.id
            }
        }).then(response => {
            this.result = response.data
        })

    }
}
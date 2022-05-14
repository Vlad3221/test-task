export default {
    name: 'IndexPage',
    data() {
        return {
            messages: [],
            commentPerPage: null,
            disablePrev: false,
            disableNext: false,
        }

    },
    methods: {
        async fetch() {
            const response = await this.$axios.get('https://jsonplaceholder.typicode.com/comments', {
                params: {
                    _start: (Number(this.$route.params.id) - 1) * 10,
                    _limit: 11
                }
            })
            if (response.data.length < 11) {
                this.disableNext = true
            } else {
                this.disableNext = false
            }
            this.messages = response.data.splice(0, 10)
        },

        goNext() {
            if (this.$route.params.id >= 1) {
                this.$router.push('/' + (Number(this.$route.params.id) + 1));
            }
        },

        goPrev() {
            if (this.$route.params.id > 1) {
                this.$router.push('/' + (Number(this.$route.params.id) - 1));
                this.disablePrev = false
            } else {
                this.disablePrev = true
            }
        }
    },
    mounted() {
        if (this.$route.params.id < 1) {
            this.$router.push('/1');
        }
        this.fetch()
    },
}
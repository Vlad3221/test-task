export default {
    name: 'IndexPage',
  // Создаем стандартный массив
    data() {
        return {
            messages: [],
            commentPerPage: null,
            disablePrev: false,
            disableNext: false,
        }

    },
  // Прописываем методы работы с коментариями
    methods: {
        async fetch() {
          // Axios API запрос на получение данных коментариев 
            const response = await this.$axios.get('https://jsonplaceholder.typicode.com/comments', {
                params: {
                    _start: (Number(this.$route.params.id) - 1) * 10,
                    _limit: 11
                }
            })
          // Условие если длинна ответа меньше 11 то кнопка "Далее" не появляется, в противном случае наоборот
            if (response.data.length < 11) {
                this.disableNext = true
            } else {
                this.disableNext = false
            }
          // разделение до 10 объектов
            this.messages = response.data.splice(0, 10)
        },

      // Функция кнопки "Далее"
        goNext() {
          // Условие если id страницы > либо = 1 то пушим на +1
            if (this.$route.params.id >= 1) {
                this.$router.push('/' + (Number(this.$route.params.id) + 1));
            }
        },

      // Функция кнопки "Назад"
        goPrev() {
          // Условие если id страницы > 1 то кнопка "Назад" показывается и пушим на -1, в противном случае отключаем кнопку "Назад"
            if (this.$route.params.id > 1) {
                this.$router.push('/' + (Number(this.$route.params.id) - 1));
                this.disablePrev = false
            } else {
                this.disablePrev = true
            }
        }
    },
  // Прослушиваем push
    mounted() {
        if (this.$route.params.id < 1) {
            this.$router.push('/1');
        }
        this.fetch()
    },
}

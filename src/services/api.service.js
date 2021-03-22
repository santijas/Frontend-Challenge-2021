import axios from 'axios'

export class HttpStatus {
    static OK = 200
}

const ApiService = {

    async getCategories() {
        const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.VUE_APP_APIKEY}`
        const response = await axios.get(url)
        if (response.status === HttpStatus.OK) {
            return response.data.results
        } else {
            throw response.data
        }
    },

    async getBooks(category) {
        const url = `https://api.nytimes.com/svc/books/v3/lists/current/${category}?api-key=${process.env.VUE_APP_APIKEY}`
        const response = await axios.get(url)

        if (response.status === HttpStatus.OK) {
            return response.data.results.books
        } else {
            throw response.data
        }
    },

}

export default ApiService
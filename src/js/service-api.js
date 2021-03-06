import axios from 'axios';

export default class FetchBildsAPI {
    constructor() {
        this.options = {
            params: {
                key: '26972280-5e0734b593481367c97a8fc1d',
                q: '',
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: 1,
                per_page: 39,
            },
        };       
    }

    async getBilds() {
        const response = await axios.get('https://pixabay.com/api/', this.options);
        this.incrementPage();
        return response;
    
    }

    incrementPage() {
        this.options.params.page += 1;
    }
    
    resetPage() {
        this.pageNumber = 1;
    }

    get searchQuery() {
        return this.options.params.q;
    }

    set searchQuery(newQuery) {
        this.options.params.q = newQuery;
    }

    get pageNumber() {
        return this.options.params.page;
    }

    set pageNumber(newNumber) {
        this.options.params.page = newNumber;
    }
}
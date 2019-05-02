import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResult() {
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '6d4bfcf4c05abd9dc986e62f3161e2f0';
        try {
            const res = await axios(
                `https://www.food2fork.com/api/search?key=${key}&q=${
                    this.query
                }`
            );
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (err) {
            alert(err);
        }
    }
}

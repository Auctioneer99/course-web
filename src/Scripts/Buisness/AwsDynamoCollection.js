export default (mapper) => {

    return {
        async getCollection() {
            let response = {
                1: 0,
                2: 1
            };
            let collection = [];
            response.forEach((value, index) => {
                let card = mapper.map({index, value});
                collection.push(card);
            })
            return collection;
        },
        async getCardInfo() {

        }
    }
}
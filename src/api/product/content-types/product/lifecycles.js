

module.exports = {
    // update product SerialNumber after Product Create with Unique Number
    async afterCreate(product) {
        const { result, params } = product;
        
        // here we genrate New Random Number with mathematical properties
        const serialNumberData = generateNumericSequence(8);

        // here we update Product serial nuumber with [serialNumberData] and
         // refactor it to ProductId + serialNumberData
        const updatedData = {
            data: {
                serial_number: `${product.result.id}${serialNumberData}`
            }
        };

        await strapi.entityService.update('api::product.product', product.result.id, updatedData);
    }
};


// Create a function to generate numeric IDs


function generateNumericSequence(length) {
    let numericSequence = '';

    for (let i = 0; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * 10);
        numericSequence += randomDigit;
    }

    return numericSequence;
}

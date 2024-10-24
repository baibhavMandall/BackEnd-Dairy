const { User, Product, Ingredient } = require('../Module')

const ReadUser = async (email) => {

    try {
        const user = await User.findOne({ email });

        if (user) {
            return user;
        } else {
            return `user not found`;
        }
    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
}

const ReadProducts = async () => {
    try {
        const products = await Product.find();

        if (!products) {
            console.log('Data not found!');
            return { 'error': `Data not found!` };
        }

        const data = await Promise.all(products.map(async (value) => {

            const item = await ReadIngredient(Number.parseInt(value.pid));            

            value._doc.ingredient = item;

            return value._doc;
        }))

        console.log('Request fullfilled successfully');
        return data;

    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
};

const ReadIngredient = async (pid) => {
    try {
        const ingredient = await Ingredient.findOne({ pid: pid });

        if (!ingredient) {
            console.log('Data not found!');
            return null;
        }

        // console.log('Ingredients returned sccessfully');

        return ingredient.items;

    } catch (error) {
        console.log(`Error : ${error}`);
    }
}

module.exports = { ReadUser, ReadProducts };

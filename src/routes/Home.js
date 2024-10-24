const { ReadProducts } = require('../modules/CRUD/Read');

const Home = async (req, res) => {
      
    const product = await ReadProducts();

    res.json(product);

}

module.exports = Home;

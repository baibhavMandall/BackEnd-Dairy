const { User, Product } = require("../Module");
const Create = async (name, email, password) => {
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("User already exists");
      return "User already exists";
    }

    const user = new User({ name, email, password });
    await user.save();
    console.log("User created successfully");
    return "User created successfully";
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

const CreateProduct = async (pid, name) => {
  try {
    const productExists = await Product.findOne({ pid });
    if (productExists) {
      console.log("Product already exists");
      return {'Error': 'Product already exists'};
    }

    const product = new Product({ pid, name });
    await product.save();
    console.log("Product created successfully");
    return { 'message': 'Product created successfully'};
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

module.exports = {Create, CreateProduct};

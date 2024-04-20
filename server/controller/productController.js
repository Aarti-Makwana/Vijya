import Product from "../modal/productModal.js";
export const productController = async (request, response) => {
    try {
        const products = [
            {
                ratings: 5,
                price: 1000,
                heading: "Apple Series 4 GPS A 38 MM Space",
                description:"This watch from Apple is highly known for its features, like you can control your apple smartphone with this watch and you can do everything  you would want to do on smartwatch",
                image:"watch1.png" 
            },
            {
                ratings: 4,
                price: 150,
                heading: "iPhone",
                description:"This iPhone from Apple is highly known for its features, like you can control your apple smartWatch with this watch and you can do everything  you would want to do on smartphone",
                image: "watch2.png" 
            },
            {
                ratings: 3,
                price: 500,
                heading: "Camera",
                description:"This Camera from Apple is highly known for its features, like you can control your apple smartWatch with this watch and you can do everything  you would want to do on smartphone",
                image:"watch3.png" 
            },
            {
                ratings: 2,
                price: 15000,
                heading: "Head Phones",
                description:"This Head Phones from Apple is highly known for its features, like you can control your apple smartWatch with this watch and you can do everything  you would want to do on smartphone",
                image: "watch4.png" 
            },
        ];

        await Product.insertMany(products);
        response.status(200).json(products);
    } catch (error) {
        console.error('Error:', error);
        response.status(500).send('Internal Server Error');
    }
};
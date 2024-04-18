import Product from "../modal/productModal.js";
export const productController = async (request, response) => {
    try {
        const products = [
            {
                ratings: 5,
                price: 1000,
                desc: "Apple Series 4 GPS A 38 MM Space",
                image:"watch1.png" 
            },
            {
                ratings: 4,
                price: 150,
                desc: "iPhone",
                image: "watch2.png" 
            },
            {
                ratings: 3,
                price: 500,
                desc: "Camera",
                image:"watch3.png" 
            },
            {
                ratings: 2,
                price: 15000,
                desc: "Head Phones",
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
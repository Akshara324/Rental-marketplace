const pool = require("../config/db");

// Add Product
const addProduct = async (req, res) => {

    try {

        const { name, category, description, price, image, owner_id } = req.body;

        await pool.query(
            `INSERT INTO products
            (name, category, description, price, image, owner_id)
            VALUES($1,$2,$3,$4,$5,$6)`,
            [name, category, description, price, image, owner_id]
        );

        res.status(201).json({
            message: "Product Added Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

// Get All Products
const getAllProducts = async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM products ORDER BY id DESC"
        );

        res.status(200).json(result.rows);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

const getProductById = async(req,res)=>{

    try{

        const {id}=req.params;


        const result = await pool.query(
            "SELECT * FROM products WHERE id=$1",
            [id]
        );


        res.json(result.rows[0]);


    }catch(err){

        console.log(err);

        res.status(500).json({
            message:"Server Error"
        });

    }

};

module.exports={
    addProduct,
    getAllProducts,
    getProductById
};
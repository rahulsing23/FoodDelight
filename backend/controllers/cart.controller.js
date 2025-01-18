import Cart from "../models/cart.model.js";

export const addCart = async (req, res, next) => {
  try {

    const { itemId, email, itemName, price, quantity } = req.body;
    console.log(itemId, email, itemName, price, quantity)
    if(!itemId || !email ||  !itemName || !price || !quantity){
        return res.status(400).send("Failed to add into cart.");
    }

    const checkItem = await Cart.find({itemId: itemId});
    if(checkItem.length === 0){
        await Cart.create({
            itemId,
            email,
            itemName,
            price,
            quantity
        });
    }
    else{
    //    console.log(checkItem[0].quantity)
       const newQuantity = checkItem[0].quantity + quantity;
       await Cart.updateOne({quantity: newQuantity})
    }
   

    res.status(200).send("Cart added successfully");

  } catch (error) {
    return res.status(400).send("Failed to add into cart.")
  }
}

export const getCart = async (req, res, next) => {
  try {
    const cartitemsList = await Cart.find();

    res.status(200).json({cart: cartitemsList});

  } catch (error) {
    return res.status(400).json({message: "Failed to retrieve from cart."})
  }
}

// git init

// git add README.md

// git commit -m "first commit"

// git branch -M main

// git remote add origin https://github.com/AccountName/RepoName.git

// git push -u origin main
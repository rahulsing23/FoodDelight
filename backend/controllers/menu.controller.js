import Menu from "../models/menu.model.js"
export const menuItems = async(req, res, next) => {
  try {
    const menuitemlist = await Menu.find();
    if(menuitemlist === null){
        return res.status(500).json({ error: error.message });
    }
 
    return res.status(200).json({menu: menuitemlist})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
function generateOrderId() {
    const now = new Date();

    // Format: YYYYMMDDHHMMSS + milliseconds
    const year = now.getFullYear(); // 4-digit year
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month (01-12)
    const day = String(now.getDate()).padStart(2, '0'); // Day (01-31)
    const hours = String(now.getHours()).padStart(2, '0'); // Hours (00-23)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Minutes (00-59)
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Seconds (00-59)
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0'); // Milliseconds (000-999)

    return `ITEMID${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
}
export const addMenuItem = async (req, res, next) => {
  try {
    const { itemname, description, price, image } = req.body;
    const itemId =  generateOrderId();
    if(!itemId || !itemname  || !price )
    {
        return res.status(400).send("Itemname, price is required")
    }
    const newmenuitem = await Menu.create({
        itemId,
        itemname,
        description: description || "",
        price,
        image: image || ""
    })
    return res.status(200).send("Item added successfully.")

  } catch (error) {
    return res.status(400).send("Failed to add item.")
  }
}

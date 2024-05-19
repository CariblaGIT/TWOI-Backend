import Pickup from "./Pickup.js"

export const getAllPickups = async (req, res) => {
    try {
        const pickups = await Pickup.find({});

        return res.status(200).json({
            success: true,
            message: "Pickups retrieved succesfully",
            data: pickups
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const getAllPickupsFromType = async (req, res) => {
    try {
        const type = req.params.type;

        const pickups = await Pickup.find({type: type});

        return res.status(200).json({
            success: true,
            message: `Pickups from type ${type} retrieved succesfully`,
            data: pickups
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const postPickup = async (req, res) => {
    try {
        const { name, description, type, image } = req.body;

        if(!name || !description || !type || !image){
            throw new Error ("No provided correct data for post a pickup");
        }

        const newPickup = await Pickup.create({
            name,
            description,
            type,
            image
        });
        
        return res.status(200).json({
            success: true,
            message: "Pickup posted succesfully",
            data: newPickup
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePickupById = async (req, res) => {
    try {
        const { name, description, type, icon } = req.body;
        const pickupId = req.params.id;

        if(!name && !description && !type && !icon){
            throw new Error ("No provided data to update a pickup");
        }

        const pickupToUpdate = await Pickup.findById(pickupId);

        if(name){
            pickupToUpdate.name = name;
        }

        if(description){
            pickupToUpdate.description = description;
        }

        if(type){
            pickupToUpdate.type = type;
        }

        if(icon){
            pickupToUpdate.icon = icon;
        }

        pickupToUpdate.save();

        return res.status(200).json({
            success: true,
            message: "Pickup updated succesfully",
            data: pickupToUpdate
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePickupById = async (req, res) => {
    try {
        const pickupId = req.params.id;

        await Pickup.deleteOne({ _id: pickupId });

        return res.status(200).json({
            success: true,
            message: "Pickup deleted succesfully"
        });
    } catch (error) {
        console.log(error.message);
    }
}
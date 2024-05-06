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
    return res.status(201).json({
        success: true,
        message: "Pickup posted succesfully",
        //data: pickup
    });
}

export const updatePickupById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Pickup updated succesfully",
        //data: pickup
    });
}

export const deletePickupById = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Pickup deleted succesfully"
    });
}
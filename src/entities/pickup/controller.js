export const getAllPickups = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Pickups retrieved succesfully",
        //data: pickups
    });
}

export const getAllPickupsFromType = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Pickups retrieved succesfully",
        //data: pickups
    });
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
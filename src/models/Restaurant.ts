import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Email Field Required"],
        },
        price: {
            type: String,
            required: [true, "Price Field Required"],
        },
        time: {
            type: String,
            required: [true, "Time Field Required"],
        },
        featured: {
            type: Boolean,
            default: false,
        },
        tags: {
            type: [String],
            default: ["bbq"],
        },
    },
    { timestamps: true }
);

const model = mongoose.model("Restaurant", RestaurantSchema);
type RestaurantModel = typeof model;

function getRestaurant(): RestaurantModel {
    return mongoose.models?.["Restaurant"] ?? model;
}

const Restaurant = getRestaurant();

export default Restaurant;

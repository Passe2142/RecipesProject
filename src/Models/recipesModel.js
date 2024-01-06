import mongoose from 'mongoose';

// Defines the Schema for the collection, 'recpies'
const recipesSchema = mongoose.Schema({
    from: {
        type: Number,
        required: true,
    },
    to: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    _links: {
        self: {
            href: String,
            title: String,
            },
            next: {
            href: String,
            title: String,
            },
        },
    hits: [
        {
            recipe: {
            uri: String,
            label: String,
            image: String,
            images: {
                THUMBNAIL: {
                url: String,
                width: Number,
                height: Number,
                },
                SMALL: {
                url: String,
                width: Number,
                height: Number,
                },
                REGULAR: {
                url: String,
                width: Number,
                height: Number,
                },
                LARGE: {
                url: String,
                width: Number,
                height: Number,
                },
            },
            source: String,
            url: String,
            shareAs: String,
            yield: Number,
            dietLabels: [String],
            healthLabels: [String],
            cautions: [String],
            ingredientLines: [String],
            ingredients: [
                {
                text: String,
                quantity: Number,
                measure: String,
                food: String,
                weight: Number,
                foodId: String,
                },
            ],
            calories: Number,
            glycemicIndex: Number,
            inflammatoryIndex: Number,
            totalCO2Emissions: Number,
            co2EmissionsClass: String,
            totalWeight: Number,
            cuisineType: [String],
            mealType: [String],
            dishType: [String],
            instructions: [String],
            tags: [String],
            externalId: String,
            totalNutrients: {},
            totalDaily: {},
            digest: [
                {
                label: String,
                tag: String,
                schemaOrgTag: String,
                total: Number,
                hasRDI: Boolean,
                daily: Number,
                unit: String,
                sub: {},
                },
                ],
            },
            _links: {
                self: {
                href: String,
                title: String,
                },
                next: {
                href: String,
                title: String,
                },
            },
        },
    ],
});

// Configura las opciones toJSON para el esquema
recipesSchema.set("toJSON", { getters: true, setters: true, virtuals: true });

// Crea un modelo usando el esquema para la colección 'products'
const RecipesModel = mongoose.model("recipes", recipesSchema);

export default RecipesModel;
export interface Restaurant {
    title: string;
    time: string;
    price: string;
    tags: tags[];
    featured: boolean;
}

type tags = "pizza" | "burger" | "bbq" | "sushi" | "vegan" | "desserts";

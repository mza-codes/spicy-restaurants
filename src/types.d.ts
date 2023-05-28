export interface Restaurant {
    title: string;
    time: string;
    price: string;
    tags: tags[];
    featured: boolean;
}

type tags = "pizza" | "burger" | "bbq" | "sushi" | "vegan" | "desserts";

export type LoginData = {
    email: string;
    password: string;
};

export type SignupData = LoginData & Record<"name", string>;

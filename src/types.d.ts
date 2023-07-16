export type SetFunction<T> = (value: T | ((prev: T) => T)) => void;

export interface Restaurant {
    title: string;
    time: string;
    price: string;
    tags: tags[];
    featured: boolean;
    img: string;
    count: number;
    
    // db
    _id?: string;
}

type tags = "pizza" | "burger" | "bbq" | "sushi" | "vegan" | "desserts";

export type LoginData = {
    email: string;
    password: string;
};

export type SignupData = LoginData & Record<"name", string>;
export type NotificationsKey =
    | "deals"
    | "newsletter"
    | "offers"
    | "password_changes"
    | "restaurants"
    | "status";

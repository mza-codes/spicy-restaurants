import { Restaurant, tags } from "@/types";
import { create } from "zustand";

const useLocalStore = create<LocalStore>((set, get) => ({
    data: [],
    restaurants: [],
    selectedTags: ["burger", "pizza", "sushi", "desserts"],
    isFetching: true,

    selectTag(tag, isSelected) {
        if (isSelected) {
            set({
                selectedTags: [...get().selectedTags.filter((v) => v !== tag)],
            });
        } else {
            set({
                selectedTags: [...get().selectedTags.filter((v) => v !== tag), tag],
            });
        }
    },
    setSelectedTags(tag) {
        set({
            selectedTags: [tag],
        });
    },
    filterRestaurants() {
        const items: Restaurant[] = [];
        const { data, selectedTags } = get();

        for (let i = 0; i < data.length; i++) {
            const current = data[i];

            for (let j = 0; j < selectedTags.length; j++) {
                const key = selectedTags[j];
                if (current.tags.includes(key) && !items.includes(current)) {
                    items.push(current);
                }
            }
        }

        set({
            restaurants: items,
        });
    },
    populateData(data) {
        set({
            data,
            restaurants: data,
            isFetching: false,
        });
    },
}));

export const { selectTag, setSelectedTags, filterRestaurants, populateData } =
    useLocalStore.getState();

export default useLocalStore;

export var categories: tags[] = ["pizza", "burger", "bbq", "sushi", "vegan", "desserts"];

interface LocalStore {
    selectedTags: tags[];
    restaurants: Restaurant[];
    data: Readonly<Restaurant>[];
    isFetching: boolean;

    populateData: (data: Restaurant[]) => void;
    selectTag: (tag: tags, isSelected: boolean) => void;
    filterRestaurants: () => void;
    setSelectedTags: (tag: tags) => void;
}

export const isValidTag = (val: any): val is tags => {
    return categories.includes(val);
};

export interface Nutrients {
    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
    FIBTG: number;
}

export interface Food {
    foodId: string;
    uri: string;
    label: string;
    nutrients: Nutrients;
    category: string;
    categoryLabel: string;
    image: string;
}

export interface Parsed {
    food: Food;
}

export interface Nutrients2 {
    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
    FIBTG: number;
}

export interface Food2 {
    foodId: string;
    uri: string;
    label: string;
    nutrients: Nutrients2;
    category: string;
    categoryLabel: string;
    image: string;
    foodContentsLabel: string;
    brand: string;
}

export interface Measure {
    uri: string;
    label: string;
    qualified: any[][];
}

export interface Hint {
    food: Food2;
    measures: Measure[];
}

export interface Next {
    title: string;
    href: string;
}

export interface Links {
    next: Next;
}

export interface EdamanObject {
    text: string;
    parsed: Parsed[];
    hints: Hint[];
    _links: Links;
}
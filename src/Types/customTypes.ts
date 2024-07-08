type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: Company;
    address: Address;
}

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type Album = {
    userId: number;
    id: number;
    title: string;
}
export interface ImenuItems{
    name: string;
    path?: string[];
    icon: string;
    role?: string[];
    expanded?: boolean;
    children?: ImenuItems[];
}
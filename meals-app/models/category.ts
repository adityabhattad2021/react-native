
export interface CategoryInterface {
    id: string;
    title: string;
    color: string;
}

class Category implements CategoryInterface {
    id: string;
    title: string;
    color: string;

    constructor(id: string, title: string, color: string) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}

  export default Category;
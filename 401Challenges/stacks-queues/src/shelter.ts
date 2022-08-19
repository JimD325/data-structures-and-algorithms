interface Animal {
    name: any;
    type: "cat" | "dog";
} // interfaces are just for objects


export class Shelter {
    arr: Animal[] = [];
    enqueue(name: string, type: "cat" | "dog"): void {
        const newAnimal: Animal = { name, type };
        this.arr.push(newAnimal);
    }

    dequeue(type?: "cat" | "dog"): any {
        if (this.arr.length) {
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i].type === type) {
                    console.log("----->", this.arr);
                    return this.arr.splice(i, 1)[0].name;
                }
            }
            if (type == undefined) {
                return this.arr.shift().name;
            }
        } else {
            throw new Error;
        }
    }
}
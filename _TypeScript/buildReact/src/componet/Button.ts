import { Componet } from "../core/Component.js";

export class Button extends Componet{

    render(): string {
        return `<button class="btn"> Click</button>`
    }

    style(): string {
        return `
        .btn {
                padding: 10px 10px;
                border: 1px solid black;
                color: blue;
            }
        `
    }
}
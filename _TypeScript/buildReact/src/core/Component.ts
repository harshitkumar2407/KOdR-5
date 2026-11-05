export abstract class Componet{
    protected _element: HTMLElement | null = null;
    protected _elementCSS: HTMLElement | null = null;


    abstract render():string;
    abstract style():string;

    // private _createElement():HTMLElement | null{
    //     const templet = document.createElement("template")
    //     templet.innerHTML = this.render()
    //     return templet.content.firstElementChild as HTMLElement
    // }
    private _createElement():HTMLElement| null{
        const template = document.createElement("template")
        template.innerHTML = this.render()
        return template.content.firstElementChild as HTMLElement
    }

    private _InjectStyle(){
        const css = this.style();
        if (!css) {return}
        const key = this.constructor.name; //unique
        if (document.querySelector(`style[data-id=${key}]`)) return
        this._elementCSS = document.createElement("style")
        this._elementCSS.dataset['id'] = key;
        this._elementCSS.textContent = css
        document.head.appendChild(this._elementCSS)
    }



    mount(parent:HTMLElement){
        this._InjectStyle()
        const el = this._createElement();
        if (el) {
            parent.appendChild(el);
            this._element = el;
        }
    }



    unmount(parent:HTMLElement){
        this._element?.remove();
        this._element = null;
    }
}
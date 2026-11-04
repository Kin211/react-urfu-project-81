import type {Attributes} from "./types.js";

const SOLO_TAGS = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

export class Tag {
    private name: string;
    private attributes: Attributes = {};
    private content: string | undefined;

    constructor(name: string, attributes: Attributes = {}, content?: string) {
        this.name = name.toLowerCase();
        this.attributes = {...attributes};
        this.content = content;
    }

    private renderAttributesString(): string {
        const attrs = Object.entries(this.attributes)
            .filter(([key, value]) => value !== false)
            .map(([key, value]) => {
                if (value === true) return key;
                return `${key}="${value}"`;
            });

        return attrs.length ? ' ' + attrs.join(' ') : '';
    }

    public toString(): string {
        const attrsStr = this.renderAttributesString();

        if (SOLO_TAGS.has(this.name)) {
            return `<${this.name}${attrsStr}>`;
        }

        return `<${this.name}${attrsStr}>${this.content ?? ""}</${this.name}>`;
    }
}

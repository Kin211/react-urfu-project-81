import type {Attributes} from "./types.js";

const SOLO_TAGS = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

export class Tag {
    private name: string;
    private attributes: Attributes = {};
    private content: string | undefined;
    private childTags: Tag[] = [];

    constructor(name: string, attributes: Attributes = {}, content?: string) {
        this.name = name.toLowerCase();
        this.attributes = {...attributes};
        this.content = content;
    }

    private renderAttributesString(): string {
        const attrs = Object.entries(this.attributes)
            .filter(([, value]) => value !== false)
            .map(([key, value]) => {
                if (value === true) return key;
                return `${key}="${value}"`;
            });

        return attrs.length ? ' ' + attrs.join(' ') : '';
    }

    public addChildTags(tags: Tag[]) {
        if (SOLO_TAGS.has(this.name)) {
            throw new Error(`Tag <${this.name}> is a void tag and cannot contain children.`);
        }
        this.childTags.push(...tags);
        return this;
    }

    public toString(): string {
        const attrsStr = this.renderAttributesString();

        if (SOLO_TAGS.has(this.name)) {
            return `<${this.name}${attrsStr}>`;
        }

        const childs = this.childTags
            .map(child => child.toString())
            .join('');

        return `<${this.name}${attrsStr}>${this.content ?? ""}${childs}</${this.name}>`;
    }
}

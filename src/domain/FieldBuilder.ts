import { Tag } from './index.js';
import type { Attributes, Template } from './index.js';

export interface InputOptions extends Attributes {
    as?: 'input' | 'textarea';
}

export class FieldBuilder<T extends Template> {
    private template: T;
    private fields: Tag[] = [];

    constructor(template: T) {
        this.template = template;
    }

    public input(fieldName: keyof T & string, options: InputOptions = {}): void {

        if (!Object.prototype.hasOwnProperty.call(this.template, fieldName)) {
            throw new Error(`Field '${fieldName}' does not exist in the template`);
        }

        const value = String(this.template[fieldName] ?? '');
        const { as = 'input', ...restOptions } = options;

        if (as === 'textarea') {
            const { cols = 20, rows = 40, ...textareaAttrs } = restOptions;
            const textarea = new Tag('textarea', {
                cols,
                rows,
                name: fieldName,
                ...textareaAttrs,
            }, value);

            this.fields.push(textarea);
            return;
        }

        const { type = 'text', ...inputAttrs } = restOptions;
        const input = new Tag('input', {
            name: fieldName,
            type,
            value,
            ...inputAttrs,
        });

        this.fields.push(input);
    }

    public getFields(): Tag[] {
        return this.fields;
    }
}

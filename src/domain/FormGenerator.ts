import { Tag, FieldBuilder } from './index.js'
import type { Attributes, Template } from './types.js';

export interface FormOptions extends Attributes {
    url?: string;
    method?: string;
}

export class FormGenerator {
    public static formFor<T extends Template>(
        template: T,
        options: FormOptions = {},
        callback?: (f: FieldBuilder<T>) => void,
    ): string {
        const { url = '#', method = 'post', ...attributes } = options;

        const builder = new FieldBuilder<T>(template);
        if (callback) {
            callback(builder);
        }

        const formTag = new Tag('form', {
            action: url,
            method,
            ...attributes,
        }).addChildTags(builder.getFields());

        return formTag.toString();
    }
}

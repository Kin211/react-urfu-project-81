import { Tag } from './index.js'
import type { Attributes } from './types.js';

export interface FormOptions extends Attributes {
    url?: string;
    method?: string;
}

export class FormGenerator {
    public static formFor(
        template: Record<string, unknown> = {},
        options: FormOptions = {},
        callback: (f: unknown) => void = () => {}
    ): string {
        const { url = '#', method = 'post', ...attributes } = options;

        const formTag = new Tag('form', {
            action: url,
            method,
            ...attributes,
        });

        return formTag.toString();
    }
}

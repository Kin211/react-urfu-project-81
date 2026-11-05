import { describe, it, expect } from 'vitest';
import { FormGenerator } from '../src/domain/index.js';

describe('FormGenerator', () => {
    const template = { name: 'rob', job: 'hexlet', gender: 'm' };

    it('форма по умолчанию с action="#" и method="post"', () => {
        const form = FormGenerator.formFor(template, {}, () => {});
        expect(form).toBe('<form action="#" method="post"></form>');
    });

    it('корректный url в атрибут action', () => {
        const form = FormGenerator.formFor(template, { url: '/users' }, () => {});
        expect(form).toBe('<form action="/users" method="post"></form>');
    });

    it('options не переданы (или переданы пустыми)', () => {
        const form = FormGenerator.formFor(template);
        expect(form).toBe('<form action="#" method="post"></form>');
    });
});

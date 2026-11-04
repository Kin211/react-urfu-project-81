import { describe, it, expect } from 'vitest';
import { Tag } from '../src/domain/index.js';

describe('Tag', () => {
    describe('Парные теги', () => {
        it('пустой парный тег', () => {
            const tag = new Tag('div');
            expect(tag.toString()).toBe('<div></div>');
        });

        it('тег с текстовым содержимым без атрибутов', () => {
            const tag = new Tag('p',{}, "Привет, мир!");
            expect(tag.toString()).toBe('<p>Привет, мир!</p>');
        });

        it('тег с атрибутами и содержимым', () => {
            const tag = new Tag('p',{title: 'greetings'}, "Привет, мир!");
            expect(tag.toString()).toBe('<p title="greetings">Привет, мир!</p>');
        });
    });

    describe('Одиночные теги', () => {
        it('одиночный тег без закрывающей части', () => {
            const input = new Tag('input');
            expect(input.toString()).toBe('<input>');
        });
    });

    describe('Атрибуты', () => {
        it('строковые и числовые атрибуты', () => {
            const tag = new Tag('input', {
                type: 'text',
                name: 'username',
                tabindex: 1,
            });

            expect(tag.toString()).toBe('<input type="text" name="username" tabindex="1">');
        });

        it('boolean-атрибуты', () => {
            const tag = new Tag('input', {
                type: 'password',
                required: true,
                disabled: false, // false атрибуты не рендеряться
            });

            expect(tag.toString()).toBe('<input type="password" required>');
        });
    });
});

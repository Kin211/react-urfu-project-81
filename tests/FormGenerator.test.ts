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

    it('поля input и textarea на основе данных объекта', () => {
        const form = FormGenerator.formFor(template, { method: 'post' }, (f) => {
            f.input('name');
            f.input('job', { as: 'textarea' });
        });

        expect(form).toBe(
            '<form action="#" method="post">' +
            '<input name="name" type="text" value="rob">' +
            '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
            '</form>'
        );
    });

    it('дополнительные атрибуты для полей последним параметром', () => {
        const form = FormGenerator.formFor(template, {}, (f) => {
            f.input('name', { class: 'user-input' });
            f.input('job');
        });

        expect(form).toBe(
            '<form action="#" method="post">' +
            '<input name="name" type="text" value="rob" class="user-input">' +
            '<input name="job" type="text" value="hexlet">' +
            '</form>'
        );
    });

    it('дефолтные атрибуты для textarea и позволять их переопределять', () => {
        const defaultTextareaForm = FormGenerator.formFor(template, {}, (f) => {
            f.input('job', { as: 'textarea' });
        });

        expect(defaultTextareaForm).toBe(
            '<form action="#" method="post">' +
            '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
            '</form>'
        );

        const customTextareaForm = FormGenerator.formFor(template, { url: '#' }, (f) => {
            f.input('job', { as: 'textarea', rows: 50, cols: 50 });
        });

        expect(customTextareaForm).toBe(
            '<form action="#" method="post">' +
            '<textarea cols="50" rows="50" name="job">hexlet</textarea>' +
            '</form>'
        );
    });

    it('ошибка, если указанного поля нет в объекте', () => {
        expect(() => {
            FormGenerator.formFor(template, { url: '/users' }, (f) => {
                f.input('name');
                f.input('job', { as: 'textarea' });
                // @ts-expect-error Чтоб дошло до рантайма, но даже не дойдёт)
                f.input('age');
            });
        }).toThrow("Field 'age' does not exist in the template");
    });
});

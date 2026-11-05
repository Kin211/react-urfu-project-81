import {FormGenerator} from './domain/index.js';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };
const form = FormGenerator.formFor(template, {}, (f) => {});

console.log(form);

// <form action="#" method="post"></form>

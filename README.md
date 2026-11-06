# Генератор форм на Typescript

[![hexlet-check](https://github.com/Kin211/react-urfu-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Kin211/react-urfu-project-81/actions)

[![Quality gate status](https://sonarcloud.io/api/project_badges/measure?project=Kin211_react-urfu-project-81&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Kin211_react-urfu-project-81)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Kin211_react-urfu-project-81&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Kin211_react-urfu-project-81)

[![CI](https://github.com/Kin211/react-urfu-project-81/actions/workflows/ci.yml/badge.svg)](https://github.com/Kin211/react-urfu-project-81/actions/workflows/ci.yml)

Библиотека, с помощью которой удобно создавать формы в шаблонах сайтов. Она заметно сокращает код описания формы за счет автоматической обработки ошибок и различных контролов.

Учебный проект Хекслета: https://ru.hexlet.io/


## Стек

- JavaScript

## Установка

<!-- Опишите установку: клонирование, зависимости, переменные окружения -->

```bash
git clone https://github.com/Kin211/react-urfu-project-81.git
cd react-urfu-project-81
```

## Использование

```
import { FormGenerator } from './src';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

const form = FormGenerator.formFor(template, { method: 'post' }, (f) => {
f.input('name');
f.input('job', { as: 'textarea' });
});

Результат
<form action="#" method="post">
  <input name="name" type="text" value="rob">
  <textarea cols="20" rows="40" name="job">hexlet</textarea>
</form>
```
---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.

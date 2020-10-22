# Test-driven front-end development

> Material de apoyo para el artículo: [**Test-driven front-end development**](https://octuweb.com/test-driven-front-end-development/) publicado en [**Octuweb**](https://octuweb.com/).

Este repositorio contiene un test de alto nivel escrito utilizando [**Cypress**](https://www.cypress.io/) ([`sendContactMessage`](./cypress/integration/sendContactMessage.test.ts)) y otros de una granularidad inferior, utilizando [**Testing Library**](https://testing-library.com/) ([`ContactForm.test.tsx`](./components/ContactForm.test.tsx)).

## Cómo ejecutar los tests

El primer paso, es instalar las dependencias del proyecto:

```shell
$ yarn install
```

Después, hay un par de comandos listos para ejecutar las diferentes suites de pruebas:

```shell
$ yarn test:acc # ejecuta la suite de Cypress
$ yarn test:unit # ejecuta la suite de Testing Library
```

El primero, incluye también las instrucciones necesarias para ejecutar la aplicación (que utiliza [**Next.js**](https://nextjs.org/)) sobre la que se realizarán las pruebas de aceptación. Si queréis ver a Cypress en acción, haciendo clicks en el navegador y utilizando la aplicación, podéis usar el comando:

```shell
$ yarn cy:open
```

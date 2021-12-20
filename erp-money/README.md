# erp-money

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Intégration Docker

Installer préalablement [Docker Desktop](https://www.docker.com/products/docker-desktop), il existe aussi une version Mac. L'application permet d'installer le Docker Engine, ce qui va permettre l'utilisation des commandes docker dans un bash. En plus d'une interface graphique permettant de voir facilement les images
présentes en local et gérer les containeurs qui tournent sur le poste.

**Attention !** Pour lancer la commande `docker build`, il faut être placer dans le même dossier que le fichier Dockerfile (frontend/erp-money/).
Si vous avez effectué des changements dans le code et que vous voulez le tester dans docker, il faut recréer à nouveau l'image (`docker build ...`).

```bash
# Création de l'image Docker
$ docker build . -t nawa/cnam-erpmoney-frontend

# Lancement de l'image, ce qui va créer un container, l'application est disponible sur http://localhost:3001/
$ docker run -p 3001:3000 -d --name front_cnam_erpmoney_app nawa/cnam-erpmoney-frontend

# Pour stopper le container
$ docker stop front_cnam_erpmoney_app

# Pour lancer le container
$ docker start front_cnam_erpmoney_app
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

# 🧑‍💻 [React Native Coding Challange](https://docs.google.com/document/d/1E8Q8zhz7OBFrjrcuYERNfEdnBEUhimoQZS-kz2qGESE/edit) - Non Conformist

Aplicación para sacar y listar fotos con ubicacion - Posibilidad de compartirlas.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Decisiones de Diseño](#decisiones-de-diseño)

## Instalación

### Requisitos previos

Se debe tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Emulador para Android/iOS

### Configuración del entorno

Sigue las instrucciones de [Configuración del Entorno de React Native](https://reactnative.dev/docs/environment-setup) para asegurarte de que tu entorno esté configurado correctamente.

### Instalación de dependencias

Clona el repositorio y luego instala las dependencias:

#### Paso 1: Clonar el repositorio e instalar las dependencias

```bash
git clone https://github.com/nicoizra/NonConformistChallenge.git
```

```bash
# npm
npm install && cd ios && pod install && cd ..

# Yarn
yarn install && cd ios && pod install && cd ..
```

#### Paso 2: Correr el Metro Server

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

#### Step 3: Correr la App

#### Android

```bash
# npm
npm run android

# Yarn
yarn android
```

#### iOS

```bash
# npm
npm run ios

# Yarn
yarn ios
```

> Tras ejecutar estos comandos, la App debería mostrarse en el emulador sin problemas. Para ejecutarlo en iOS, en el package.json se puede modificar el script "ios", para elegir el emulador sobre el que se va a ejecutar.

## Uso

La idea principal es una aplicación en donde uno entra y ve un listado de fotos que sacó (No se solicitó persistencia). Puede entrar a cada foto para ver su ubicación o para compartirla.

## Decisiones de Diseño

Desarrollé componentes reutilizables y los hice lo más atómicos posibles para poder generar un código más cohesivo y mantenible (SOLID: Single Responsibility).

En cuanto a los estilos, utilicé un Theme que provee react-navigation para aprovechar su esquema, y fui modificando los estilos según necesite. Los componentes los estilé con StyleSheet.

El estado global de la aplicación - aunque fuese chico y simple - lo manejé con Context ya que me parece la herramienta más cómoda para la funcionalidad. De este modo, dispuse de un Provider para manejar las listas de fotos.

El código está tipado con TypeScript para generar una mayor legibilidad y que sea más simple de entender/mantener.

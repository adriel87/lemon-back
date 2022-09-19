# Laboratio 4 de lemon Code

# importante

renombrar el archivo .env.example por .env y editar las variables de entorno

configurar el acceso a la base de datos

## instalando dependencias

Lo primero que hacemos es instalar las librerias necesarias para el proyecto, que segun requerimientos minimos son:

- Express
- mongo
- dotEnv
- cors

ademas como herramientas en desarrollo usaremos lo siguiente

- babel
- typescript
- nodemon



## configuraciones iniciales

### babel

```json
{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "16"
          }
        }
      ],
      "@babel/preset-typescript"
    ],
    
  }
```

### Typescript
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "noLib": false,
    "allowJs": true,
    "suppressImplicitAnyIndexErrors": true,
    "skipLibCheck": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

### Scripts

aunque en este proyecto usamos `yarn` podemos usar la dependencia npm-run-all para lanzar mas de un script a la vez

```json
"scripts": {
    "start": "run-p -l type-check:watch start:dev",
    "start:dev": "nodemon --exec babel-node -r dotenv/config --extensions \".ts\" src/index.ts",
    "type-check": "tsc --noEmit",
    "type-check:watch": "npm run type-check -- --watch"
  },
```

## arquitectura

### core

empezamos por el nucleo la parte troncal de la app. Digamos que esta parte va a ser la columna vertebral de nuestra aplicacion, y en ella vamos a incluir desde configuraciones a constantes

1. crear nuestra carpeta para que haga de nucleo
en nuestro caso `core`

2. creamos subcarpetas para definir distintas partes de la app
  - `server` : aqui vamos a migrar lo que viene siendo la configuracion de nuestro server de express
  - `constant` : carpeta para guardar nuestras constantes



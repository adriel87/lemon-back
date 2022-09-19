# Laboratio 4 de lemon Code


## instalando dependencias

Lo primero que hacemos es instalar las librerias necesarias para el proyecto, que segun requerimientos minimos son:

- Express

- mongo

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
    ]
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
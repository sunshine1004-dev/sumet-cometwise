# SUMENTS
Aquí unas pequeñas chuletas sobre las cosas que se han añadido en "base_front" para que la arrancada sea más sencilla.

# Antes de continuar

Ya has debido hacer un [fork de repo ```base_front```](https://bitbucket.org/devdiogenes/base_front). Ahora toca vincular tu nuevo repositorio con el original. Dentro de tu ```fork```, ejecuta:
```
git remote add upstream https://<TU_USER_NAME>@bitbucket.org/devdiogenes/base_front.git
git fetch upstream
```
Esto no es algo que se deba hacer con frecuencia. Para notificar cuando hay que hacer esta actualización, se irán mandado emails. 
Para sincronizar los cambios de tu proyecto con el repo ```BASE_```, basta con:
```
git pull upstream master
```

Documentación de referencia [aquí](https://gist.github.com/CristinaSolana/1885435#1-clone-your-fork).

## Table of Contents
1. [Codigo modificado](#Modificaciones)
2. [Variables de configuración](#VariablesConfiguracion)
    * [env.](#env)
    * [env.development y env.production](#env.development_&_env.production)
3. [APP Services](#APPServices)
4. [Built in modules](#Built_in_modules)
    * [Axios](#Axios)
    * [Stripe](#Stripe)
    * [Google Analytics](#GoogleAnalytics)
5. [Built in service](#Built_in_services)
    * [Login](#Built_in_services)
    * [Logout](#Built_in_services)
    * [PGetDetailsUser](#Built_in_services)
6. [Template](#Template)
    * [Crear un tema](#Crear_un_tema)

# Modificaciones
**Este código no debe modificarse para un proyecto particular.**

Los sitios donde se ha tocado código llevan un comentario que encierra las modificaciones. Por ejemplo
```
//#####################
//  S_START
  magia negra
  cosas frikis
//  S_END
//#####################
```
# VariablesConfiguracion

Todas las variables que se usan están repartidas en los archivos:
- **env**
- **env.production** & **env.development**

> Las variables de éste "Base_Front" se estructuran como:
> - No accesibles desde el código: **BF_nombre_variable**
> - Accesibles desde el código: **VUE_APP_BF_nombre_variable**
## env
En este archivo se encuentra la configuración de los elementos comunes a toda la aplicación.

Todas las variables correspondientes a este "elemento", se han agrupado bajo un comentario con el nombre de éste. Por ejemplo:
```
# MODULE
VUE_APP_MODULE_<parameter_name_1>
VUE_APP_MODULE_<parameter_name_1>
...
VUE_APP_MODULE_<parameter_name_n>
```

## env.development_&_env.production
 ¿?

# APPServices
 En ```src/services/APPS.js``` está la definición de la clase que hay que usar para incluir un nuevo servicio en la aplicación. 
 
 Cada serivicio que se vaya a utilizar hay que incluirlo como un nuevo método de ésta.
 
## ¿Como añadir un nuevo serivicio?
 Para añadir un servicio nuevo, hay que declarar un método dentro de ```APPS.js``` 
 
 ```
 my_app_service_name() {
    
    **tu código aquí**
    
    return this._call_service("/service_name")
  }
```
## ¿Cómo paso datos a mi servicio?
Para que aún sea más sencillo pasar información a los servicios que definas, se ha definido un atributo público en la clase ```APPS```:

```
this.data = Object
```

Dentro de tu componente/página, estableces el valor de este atributo, y seguidamente llamas al servicio:
```
this.$APP_Services.data = {
        param_key_1: param_value_1,
        param_key_2: param_value_2,
        ...:    ...
        param_key_n: param_value_n
      };
```
### ¿Y si no quiero mandar datos?
Esto hay que mejorarlo.
Por ahora lo mejor es asegurar que la variable no contiene nada antes de llamar al servicio:

```
this.$APP_Services.data = {}
```

### ¿Tengo que formatear algo?
**NO**. Simplemente crear un objeto como el del ejemplo y asignarlo de ese modo.

### ¿Tengo que seguir mandando el "token"?
**NO**
## ¿Cómo uso mi servicio?
Aquí un ejemplo de como se ha usado el mismo sistema para el login:
```
this.$BF_Services.data = {
        user: this.email,
        pass: this.password
      };

      this.$BF_Services.login().then(
        response => {
          this.$router.push("/dashboard");
        },
        error => {
          this.error_seen_login = true;
        }
      );
```

# Built_in_modules

Algunos módulos se han implementado y configurado para que sean funcionales ``` out of the box```
## Axios

> **NO SE DEBE TOCAR AQUÍ PARA NADA RELACIONADO CON LA APP**

Se ha creado la clase ```S_axios.js``` que se ocupa de instanciar un objeto axios con la configuración que necesitamos por defecto. 

- [Documentation](https://axios-http.com/)
- [Package GitHub](https://github.com/axios/axios)


## Stripe 
[Documentation](https://vuestripe.com/stripe-checkout/getting-started)
### Variables
Following [one time payment tutorial](https://vuestripe.com/stripe-checkout/one-time-payment)
```
VUE_APP_BF_STRIPE_SCRIPT
VUE_APP_BF_STRIPE_MODE
VUE_APP_BF_STRIPE_PUBLISHABLE_KEY
VUE_APP_BF_STRIPE_PRICE_PRODUCT_CARD1
VUE_APP_BF_STRIPE_PRICE_PRODUCT_CARD2
VUE_APP_BF_STRIPE_PRICE_PRODUCT_CARD3
VUE_APP_BF_STRIPE_PRICE_PRODUCT_URL_SUCCESS
VUE_APP_BF_STRIPE_PRICE_PRODUCT_URL_CANCEL
```
## Analytics
- [Documentation](https://github.com/MatteoGabriele/vue-gtag)
### Variables
```
VUE_APP_GOOGLE_ANALYTICS_TAG
```
## I18n

El idioma por defecto de la aplicación se establece dependiendo del idioma del navegador del usuario.

- [Documentation](https://kazupon.github.io/vue-i18n/introduction.html#%F0%9F%A5%87-gold)

Los archivos en los que debes añadir tus diccionarios son:
``` 
    @/plugins/S_i18n_locales/app_en.js
    @/plugins/S_i18n_locales/app_es.js
```
**src/plugins/S_i18n_locales/app_xx.js**

### Nomenclatura
Para que el diccionario no sea un desastre, vamos a seguir una mini convención de nombres. 

Tomando como ejemplo lo que se ha desarrollado en ```bf_es.js```:
```
BF_USER_PROFILE_NAME
<PART>_  ->  BF_
<PAGE>_  ->  USER_PROFILE_
<ITEM>_  ->  NAME

BF_DASHBOARD_SUMMARY_GRAPHS_CARD3_TITTLE
<PART>_  -->  BF_
<PAGE>_  -->  DASHBOARD_SUMMARY_GRAPHS_
<ITEM>_  -->  CARD3_TITTLE
```

En el caso de las etiquetas relacionadas con la aplicación, todas ella deben seguir el mismo esquema. En el caso de la aplicación:
```
APP_<PAGE>_<ITEM>
<PART>_  -->  APP_

```
### ¿Como lo uso?

La clase S_i18n.js se ocupa de mezclar los diccionarios por tí. De este modo tienes todo accesible desde cualquier punto de la aplicación como:
```
{{ this.$S_i18n.t("<APP_<PAGE>_<ITEM>")}}
```
### Variables
```
VUE_APP_LANGUAGES_FALLBACK
VUE_APP_SUPPORTED_LOCALE
```


# Built_in_pages
Aquí un ejemplo live de las páginas con sus servicios/funcionalidades:

- [Landing](https://basefront.suments.com/#/landing)
    - landingContact()
- [Plans](https://basefront.suments.com/#/pricing)
    - getPlansInfo()
- [Register](https://basefront.suments.com/#/register)
    - register()
- [Reset Password](https://basefront.suments.com/#/reset)
    - resetPassword()
- [Login](https://basefront.suments.com/#/login)
    - login()
- [Dashboard](https://basefront.suments.com/#/dashboard)
    - ¿?
- [User profile](https://basefront.suments.com/#/pages/user)
    - getUserProfile()
    - getUserPlan()
    - updateUserPayment()
    - updateUserProfile()
    - getPlansInfo()
- [Logout]()
    - logout()

# Crear_un_tema
**@Irma**
- ¿Donde pusiste las variables para las fotos/logo?
- ¿Que archivos hay que tocar para modificar el CSS?

## Template
1 x Vue Material Dashboard PRO ( Freelancer )
- [Info](https://www.creative-tim.com/product/vue-material-dashboard-pro)
- [Demo](https://demos.creative-tim.com/vue-material-dashboard-pro/?_ga=2.70328599.644602806.1623744422-387188167.1622557245#/dashboard)
- [Documentación de componentes](https://demos.creative-tim.com/vue-material-dashboard-pro/documentation/?_ga=2.71692180.644602806.1623744422-387188167.1622557245)

# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto

Esta aplicación web te permitirá validar el número de una tarjeta de crédito. Está basada en una tienda especializada en productos para gatos, donde podrás ingresar los datos de tu tarjeta de crédito y verificar si es válida para continuar con la compra. Si la tarjeta no es válida, se mostrará una alerta indicando que debes proporcionar un número de tarjeta de crédito válido.
Los usuarios que tienen gatos como mascotas y buscan satisfacer sus necesidades y deseos en términos de alimentación, salud, entretenimiento y cuidado general, seguramente encontrarán en Cat Shop la mejor opción para realizar sus compras.
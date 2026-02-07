# 🎨 Calculadora de Especificidad CSS

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Una herramienta interactiva para desarrolladores web que visualiza y calcula el "peso" de los selectores CSS en tiempo real.

🔗 **[Ver Demo en Vivo](https://dieyoung0800.github.io/Calculadora-Especificidad/)**

## 📖 Descripción

Este proyecto es una aplicación web diseñada para ayudar a desarrolladores (especialmente principiantes) a entender cómo funciona la **cascada y la especificidad** en CSS.

A través de una interfaz moderna y reactiva, la aplicación analiza cualquier selector CSS ingresado y desglosa su puntuación en el formato estándar `(IDs, Clases, Elementos)`, proporcionando feedback visual instantáneo mediante códigos de color.

## 🚀 Características Principales

* **⚡ Cálculo en Tiempo Real:** Análisis instantáneo del selector mientras escribes.
* **🎨 Feedback Visual:** Los módulos de resultados se iluminan (Rojo, Azul, Verde) según la complejidad del selector.
* **🔢 Desglose Detallado:** Muestra el conteo exacto de IDs, Clases y Elementos.
* **⚠️ Detección de Conflictos:** Alerta visual automática cuando se detecta el uso de `!important`, el cual rompe la especificidad natural.
* **✨ UI/UX Moderna:** Diseño limpio utilizando la nueva gama de colores `oklch` y Flexbox.

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** Estructura limpia y accesible.
* **CSS3 Moderno:**
    * Flexbox para el layout.
    * Variables CSS.
    * Transiciones suaves.
    * Diseño Responsivo.
* **Vanilla JavaScript (ES6+):**
    * Manipulación del DOM.
    * Event Listeners para la reactividad.
    * Lógica de parsing con **Expresiones Regulares (Regex)**.

## 📸 Capturas de Pantalla

<img width="1887" height="910" alt="image" src="https://github.com/user-attachments/assets/f7e6eb51-4ded-417f-b59f-de7a2bbf3f7d" />
<img width="1872" height="911" alt="image" src="https://github.com/user-attachments/assets/e4e43817-1efd-4482-8012-922897751303" />


## 🔧 Instalación y Uso Local

Si deseas correr este proyecto en tu máquina local:

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/dieyoung0800/Calculadora-Especificidad.git](https://github.com/dieyoung0800/Calculadora-Especificidad.git)
    ```
2.  Navega a la carpeta del proyecto:
    ```bash
    cd Calculadora-Especificidad
    ```
3.  Abre el archivo `index.html` en tu navegador favorito.

## 🧠 Aprendizajes

Durante el desarrollo de este proyecto, profundicé en:
* Cómo el navegador interpreta la prioridad de los estilos CSS (el algoritmo de especificidad).
* La creación de algoritmos en JavaScript para procesar texto (Strings).
* Manipulación de clases CSS desde JavaScript para crear interfaces dinámicas.

## 🔮 Próximas Actualizaciones (Roadmap)

* [ ] Historial de selectores recientes.
* [ ] Botón para copiar el resultado al portapapeles.
* [ ] Persistencia de datos (LocalStorage).
* [ ] Comparador de dos selectores ("Modo Batalla").

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - siéntete libre de usarlo y mejorarlo.

---
Hecho por [Dieyoung0800](https://github.com/dieyoung0800)

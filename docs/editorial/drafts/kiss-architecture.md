---
title: "La mejor arquitectura no siempre es la más compleja"
category: "Arquitectura"
proposedDate: "2026-12-01"
status: draft
---

## El problema de la sobreingeniería

Cada componente de una solución introduce responsabilidades: mantenimiento, seguridad, observabilidad y operación. Incorporar un servicio sin una necesidad concreta puede aumentar el coste sin mejorar el resultado.

## Simplicidad con propósito

KISS no significa prescindir de pruebas, seguridad o documentación. Significa elegir la solución más sencilla que satisface los requisitos y conserva los controles necesarios.

## Un ejemplo práctico

Imaginemos un portal profesional que publica artículos y proyectos. Si el contenido cambia mediante Git, un generador estático puede cubrir la necesidad sin una base de datos ni un servidor de aplicaciones.

La decisión cambiaría si aparecieran requisitos de edición concurrente, autenticación o contenido personalizado. La arquitectura debe responder a esos requisitos, no anticiparlos indiscriminadamente.

## Antes de añadir complejidad

- ¿Qué requisito resuelve este componente?
- ¿Qué coste operativo introduce?
- ¿Existe una alternativa más sencilla?
- ¿Cómo verificaremos que funciona?

## Reflexión final

La experiencia también se demuestra en las tecnologías que decidimos no utilizar.

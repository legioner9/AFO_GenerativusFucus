# Praeambulum
## Lexicon
Латынь выбрана основным языком теминов в этом проекте - локальный словарь - [Lexicon](Lexicon\primum_centum.md)
## Filium
По мотивам [![Функции-обертки: Wrappers в JavaScript](https://img.youtube.com/vi/En7pWi2fSzs/0.jpg)](https://www.youtube.com/watch?v=En7pWi2fSzs)

[Wrapper](https://github.com/HowProgrammingWorks/Wrapper)

## Causa
Этот opus первая попытка ответить на вопрос что, как и зачем я делаю, когда строю код на примере определения функции в функциональном контексте. 

## Description
- Artus - общая структура - что делаем  
     [AFO\artus\wrap.art.js](AFO/artus/wrap.art.js)  

- Fascis - наполняющие методы в структуру - как делаем  
     [AFO\fascis](AFO\fascis)

- Operati - использование функций в коде - зачем делаем
     [AFO\operati](AFO\operati)

### Explicationes

- artus - функция замыкание
- exitus - замыкаемая функция
- communis - общий объект замыания для artus и exitus
  - internus - вызывающая fn функция
  - objProto - ссылка на прототип exitus - сеттеры полей closure 
  - closure - флаги поведения и общие переменные методов
  - ostium - ссылка на объект обернутой функции и аргуметы ее вызова
    - getOstium - геттер для копии ostium
  - os - объект для конструирования прототипа exitus
    - getCommunis - геттер для копии communis
      - tmp - объект для дописывания в прототип getOstium предыдущего прототипа fn.getCommunis, существующего в случае, если fn уже была обернута - в случае композиции врапперов в цепочку прототипов getCommunis будут записаны все аналогичные геттеры от предыдущих оберток, если они были artusAPI - это дает возможность посмотреть копию любого замыкания для тестирования поведения fn зависящего от флагов и полей замыкания
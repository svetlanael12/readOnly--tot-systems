# Почтовый ящик readonly 

Вам необходимо реализовать настраиваемый почтовый клиент, который позволяет
просматривать письма, сгруппированные по папкам и перемещать их между папками
(отправка писем не входит в задачу).
В плане ui/ux можно вдохновляться существующими решениями — Gmail,
яндекс.почтой, mail.ru или другими.

**Обязательные требования:**

- Реализовать отображение списка писем в табличном виде (колонки: Автор,
Превью, Дата)

- Письма должны быть распределены по папкам (как в обычной почте):
"Входящие / Отправленные / Черновики / Удаленные / Спам". Должна быть
возможность зайти в папку и увидеть список содержащихся в ней писем;  

- Реализовать crud для папок: создание, просмотр, редактирование и удаление  
кастомных папок для писем, перемещение в них писем;

- Реализовать возможность выбора строк и перемещения выбранных писем в
другую папку.  

**Bonus**
- Открытие полного письма на просмотр (отображать Автора, дату отправки,
полный текст письма);
- Закладки;
- хранение данных в localStorage;
- Прочитанность/непрочитанность сообщений. Возможность принудительно
прочитать письмо, автоматическая прочитанность после открытия письма;
- Быстрое удаление писем;
- Какие-то визуальные фишки, настройка режима отображения, настройка
отображаемых полей таблицы, тема;
- Деплой приложения;

**Начальные данные:**

Статический список писем (чтение из файла, или просто константа). Реализация
серверной части не входит в обязательные требования задачи.

**Cтек:**  
React, TypeScript, MobX 
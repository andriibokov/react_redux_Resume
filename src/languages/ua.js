import { calculate_age } from "./languages";

const ua = {
  tittlePage: {
    about: "Про мене",
    experience: "Досвід",
    skills: "Навички",
  },

  about: {
    title: "Інформація про мене",

    name: {
      label: "ИО: ",
      value: "Андрей Геннадиевич",
    },

    date: {
      label: "Дата рождения: ",
      value: `10 февраля 1990 года ( ${calculate_age(
        new Date(1990, 2, 10)
      )} год)`,
    },

    married: {
      label: "Семейное положение: ",
      value: "женат",
    },

    education: {
      title: "Образование: ",
      list: [
        {
          label: "Среднее образование: ",
          list: ["1997-2008 г. Середина-Буда ЗОШ№1."],
        },
        {
          label: "Высшее образование: ",
          list: [
            "2008-2013 г. Харьков ХНУРЭ Специальность: Метрология, стандартизация и сертификация. Дипломированный специалист.",
          ],
        },
        {
          label: "Самообразование: ",
          list: ["2020 -  наст. время Изучение IT направления"],
        },
      ],
    },
  },

  experience: {
    title: "Опыт работы",
    list: [
      {
        label:
          "2014-2017 г. Харьков Оператор Call-Center магазин MotoStyle и Shlem",
        text: [
          "Обработка заказов, оформленных на сайте, проём звонков, работа с проблемными заказами, обучение новых сотрудников.",
        ],
      },
      {
        label:
          "2018-2019 Польша г. Гданьск монтер металлических конструкций и труб",
        text: [
          "Монтаж конструкций согласно чертежам, работа стропальщиком, контроль соблюдения техники безопасности, обучение сотрудников.",
        ],
      },
      {
        label: "03.2020 - 10.2020 Freelance Front-end разработчик.",
        text: ["Вёрска сайтов (HTML, SCSS, BEM, Gulp, Git, Figma, JS, jQuery)"],
      },
      {
        label: "11.2020 - наст. время веб студия, Front-end разработчик,",
        text: [
          `Вёрстка новых проектов (SCSS, HTML5, BEM, Gulp, Figma, Git);
          Новые проекты Front-end (js, jQuery);
          Новые проекты Back-end (wordpress);
          Работа над существеющими проектами:
          - вёрстка,
          - Front-end (vue, react, js, jQuery),
          - Back-end (OpenCart),
          - Оптимизация скорости загрузки сайта;`,
        ],
      },
    ],
  },

  skills: {
    title: "Навыки",
    list: [
      `
    HTML, CSS, SCSS, JS,  jQuery, Vue, BEM, Gulp, Git, VS Code, Gimp, Figma
    `,
    ],
  },
};

export default ua;

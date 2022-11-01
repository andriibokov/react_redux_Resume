function calculate_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const StateData = {
  option: {
    langwichListNames: ["ua", "ru", "eng"],
  },
  langwichList: {
    ua: {
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
          label: "Образование: ",
          value: `Среднее образование:
1997-2008 г. Середина-Буда ЗОШ№1.
Высшее образование:
2008-2013 г. Харьков ХНУРЭ Специальность: Метрология, стандартизация и сертификация. Дипломированный специалист.
Самообразование:
2020 -  наст. время Изучение IT направления`,
        },
      },

      experience: {
        test: `Досвід роботи
2014-2017 р. Харків Оператор Call-Center магазин MotoStyle та Shlem
Обробка замовлень, оформлених на сайті, дзвінки, робота з проблемними замовленнями, навчання нових співробітників.
2018-2019 Польща м. Гданськ монтер металевих конструкцій та труб
Монтаж конструкцій згідно креслень, робота стропальником, контроль за дотриманням техніки безпеки, навчання співробітників.
03.2020 – 10.2020 Freelance Front-end розробник.
Версія сайтів (HTML, SCSS, BEM, Gulp, Git, Figma)
Front-end частина (JS, jQuery);
11.2020 – наст. час веб студія, Front-end розробник,
Обов'язки:
Верстка нових проектів (SCSS, HTML5, BEM, Gulp, Figma, Git);
Нові проекти Front-end (js, jQuery);
Нові проекти Backend (wordpress);
Робота над існуючими проектами:
- Верстка,
- Front-end (vue, react, js, jQuery),
- Back-end (OpenCart),
- оптимізація швидкості завантаження сайту;
`,
      },

      skills: {
        test: `HTML, CSS, SCSS, JS,  jQuery, Vue, BEM, Gulp, Git, VS Code, Gimp, Figma`,
      },
    },

    ru: {
      tittlePage: {
        about: "Обо мне",
        experience: "Опыт",
        skills: "Навыки",
      },

      about: {
        title: "Информация обо мне",

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
          label: "Образование: ",
          value: `Среднее образование:
1997-2008 г. Середина-Буда ЗОШ№1.
Высшее образование:
2008-2013 г. Харьков ХНУРЭ Специальность: Метрология, стандартизация и сертификация. Дипломированный специалист.
Самообразование:
2020 -  наст. время Изучение IT направления`,
        },
      },

      experience: {
        test: `Опыт работы
2014-2017 г. Харьков Оператор Call-Center магазин MotoStyle и Shlem
Обработка заказов, оформленных на сайте, проём звонков, работа с проблемными заказами, обучение новых сотрудников.
2018-2019 Польша г. Гданьск монтер металлических конструкций и труб
Монтаж конструкций согласно чертежам, работа стропальщиком, контроль соблюдения техники безопасности, обучение сотрудников.
03.2020 - 10.2020 Freelance Front-end разработчик. 
Вёрска сайтов (HTML, SCSS, BEM, Gulp, Git, Figma)
Front-end часть (JS, jQuery);
11.2020 - наст. время веб студия, Front-end разработчик,
Обязаности:
Вёрстка новых проектов (SCSS, HTML5, BEM, Gulp, Figma, Git);
Новые проекты Front-end (js, jQuery);
Новые проекты Back-end (wordpress);
Работа над существеющими проектами:
		- вёрстка,
		- Front-end (vue, react, js, jQuery),
		- Back-end (OpenCart),
		- Оптимизация скорости загрузки сайта;
`,
      },

      skills: {
        test: `
HTML, CSS, SCSS, JS,  jQuery, Vue, BEM, Gulp, Git, VS Code, Gimp, Figma
`,
      },
    },

    eng: {
      tittlePage: {
        about: "About me",
        experience: "Experience",
        skills: "Skills",
      },

      about: {
        title: "Information about me",

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
          label: "Образование: ",
          value: `Среднее образование:
1997-2008 г. Середина-Буда ЗОШ№1.
Высшее образование:
2008-2013 г. Харьков ХНУРЭ Специальность: Метрология, стандартизация и сертификация. Дипломированный специалист.
Самообразование:
2020 -  наст. время Изучение IT направления`,
        },
      },

      experience: {
        test: `work experience
2014-2017 Kharkiv Call-Center operator MotoStyle and Helmet shop
Processing orders placed on the site, handling calls, working with problematic orders, training new employees.
2018-2019 Poland Gdansk fitter of metal structures and pipes
Installation of structures according to the drawings, work as a slinger, monitoring compliance with safety regulations, employee training.
03.2020 - 10.2020 Freelance Front-end developer.
Website design (HTML, SCSS, BEM, Gulp, Git, Figma)
Front-end part (JS, jQuery);
11.2020 - present web studio, front-end developer,
Responsibilities:
Layout of new projects (SCSS, HTML5, BEM, Gulp, Figma, Git);
New Front-end projects (js, jQuery);
New back-end projects (wordpress);
Work on existing projects:
- layout,
- Front-end (vue, react, js, jQuery),
- Back-end (OpenCart),
- Optimizing site loading speed;`,
      },

      skills: {
        test: `HTML, CSS, SCSS, JS,  jQuery, Vue, BEM, Gulp, Git, VS Code, Gimp, Figma`,
      },
    },
  },
};

export default StateData;

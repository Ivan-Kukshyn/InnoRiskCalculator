Risk Index Calculator

Сучасний SPA-застосунок для оцінки інвестиційних ризиків інноваційних продуктів із адаптивним інтерфейсом, інтерактивною візуалізацією даних та централізованим управлінням станом.

Опис проєкту

Risk Index Calculator — це frontend SPA-застосунок, розроблений на базі React та Vite, який дозволяє виконувати інтерактивну оцінку ризиків інноваційних проєктів у режимі реального часу.

Застосунок реалізує:

покрокову оцінку факторів ризику;
автоматичний розрахунок індексу ризику;
категоризацію рівня ризику;
інтерактивні графіки та dashboard-аналітику;
локальне збереження історії розрахунків;
адаптивний responsive UI.

Основна мета проєкту — створення сучасного кросплатформного SPA-застосунку для аналізу інвестиційних ризиків із використанням сучасних frontend-технологій та component-based architecture.

Основні можливості
Реалізований функціонал
Інтерактивна оцінка ризиків;
Покроковий wizard для введення даних;
Автоматичний розрахунок risk index;
Візуалізація результатів через Recharts;
Категоризація рівня ризику;
Dashboard UI;
Responsive design;
localStorage persistence;
Zustand state management;
Оптимізований React rendering.
Фактори ризику

Застосунок підтримує оцінювання 5 основних факторів ризику:

Фактор	Вага
Market Risk	25%
Technical Risk	20%
Financial Risk	20%
Competition Risk	15%
Regulatory Risk	20%
Алгоритм розрахунку ризику

Індекс ризику обчислюється на основі зваженої суми факторів ризику.

Формула:
Risk Index = Σ(factor × weight)
Вагові коефіцієнти:
const weights = {
  marketRisk: 0.25,
  technicalRisk: 0.20,
  financialRisk: 0.20,
  competitionRisk: 0.15,
  regulatoryRisk: 0.20
};
Приклад розрахунку:
const factors = {
  marketRisk: 7.0,
  technicalRisk: 5.0,
  financialRisk: 8.0,
  competitionRisk: 6.0,
  regulatoryRisk: 4.0
};
7.0 × 0.25 = 1.75
5.0 × 0.20 = 1.00
8.0 × 0.20 = 1.60
6.0 × 0.15 = 0.90
4.0 × 0.20 = 0.80

Risk Index = 6.05
Категорії ризику
Діапазон	Категорія
0.0 – 2.5	🟢 Низький ризик
2.6 – 5.0	🟡 Середній ризик
5.1 – 7.5	🟠 Високий ризик
7.6 – 10.0	🔴 Критичний ризик
Технологічний стек
Frontend
React 19
JavaScript (ES Modules)
Vite 7
Tailwind CSS
Zustand
Recharts
ESLint
Архітектура

Проєкт побудований на основі:

Component-Based Architecture;
Reactive State Management;
Service Layer Pattern;
MVC adaptation;
Responsive Dashboard UI.
Структура проєкту
frontend/
├── src/
│
├── components/
│   ├── layout/
│   ├── risk/
│   ├── charts/
│   └── ui/
│
├── hooks/
├── services/
├── store/
├── utils/
│
├── App.jsx
├── main.jsx
└── index.css
Інтерфейс застосунку
Основні UI-компоненти
Navbar;
Sidebar;
RiskForm;
ResultCard;
RiskChart;
RiskHistory.
Візуалізація даних

Для побудови графіків використовується бібліотека Recharts.

Реалізовані:

Bar Chart;
Radar Chart;
Pie Chart.
Адаптивність

Інтерфейс побудований за принципом mobile-first та підтримує:

Desktop;
Tablet;
Mobile layout.

Tailwind CSS забезпечує responsive rendering без окремих mobile templates.

Оптимізація продуктивності

У застосунку використовуються:

React.memo;
useMemo;
Zustand persist middleware;
selector-based rendering.

Це дозволяє:

зменшити кількість rerenders;
оптимізувати rendering pipeline;
покращити швидкодію SPA.
Local Storage Persistence

Історія розрахунків автоматично зберігається у localStorage браузера.

Після перезавантаження сторінки:

стан застосунку відновлюється;
історія розрахунків не втрачається;
зберігаються останні введені значення.
UML документація

Проєкт містить UML-діаграми:

UML/
├── Class.puml
├── Component.puml
├── Deployment.puml
├── UseCase.puml
└── MVC-Adaptation.puml
Встановлення та запуск
Встановлення залежностей
npm install
Запуск dev-сервера
npm run dev

Після запуску застосунок буде доступний:

http://localhost:5173
Production build
npm run build
Preview production build
npm run preview
Доступні команди
npm run dev        # запуск dev-сервера
npm run build      # production build
npm run preview    # preview production build
npm run lint       # ESLint перевірка
Lighthouse Performance

Після рефакторингу застосунок демонструє високі показники:

Performance — 90+;
Accessibility — 95+;
Best Practices — 100;
SEO — 90+.
Подальший розвиток

Планується реалізація:

AI-рекомендацій;
backend API;
PostgreSQL integration;
cloud synchronization;
predictive analytics;
export PDF/Excel;
user authentication.
Автор

Курсова робота з дисципліни
«Кросплатформне програмування»

Тема:
«Кросплатформний калькулятор індексу ризику інноваційних продуктів»
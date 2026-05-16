# Risk Index Calculator

Сучасний SPA-застосунок для оцінки інвестиційних ризиків інноваційних продуктів із адаптивним UI, інтерактивною візуалізацією даних та централізованим управлінням станом.

## Про проєкт

Risk Index Calculator — це frontend SPA-застосунок, розроблений на базі React та Vite, який дозволяє виконувати інтерактивну оцінку ризиків інноваційних проєктів у режимі реального часу.

Проєкт створений із використанням сучасних frontend-підходів, component-based architecture та reactive state management.

Основні можливості:
- Покрокова оцінка факторів ризику
- Автоматичний розрахунок індексу ризику
- Категоризація рівня ризику
- Dashboard-аналітика та інтерактивні графіки
- Збереження історії розрахунків у localStorage
- Responsive UI для Desktop / Tablet / Mobile
- Оптимізований rendering та state management

## Реалізований функціонал
Інтерактивна оцінка ризиків
Wizard-форма для введення даних
Автоматичний розрахунок Risk Index
Візуалізація результатів через Recharts
Dashboard UI
Responsive Design
Zustand State Management
LocalStorage Persistence
Оптимізований React rendering

## Фактори ризику

Застосунок підтримує оцінювання 5 основних факторів ризику:

   Фактор	         Вага
Market Risk	        25%
Technical Risk	    20%
Financial Risk	    20%
Competition Risk	  15%
Regulatory Risk	    20%

## Алгоритм розрахунку

Індекс ризику обчислюється на основі зваженої суми факторів ризику.

## Формула

Risk Index=∑(factor * weight)

Вагові коефіцієнти
const weights = {
  marketRisk: 0.25,
  technicalRisk: 0.20,
  financialRisk: 0.20,
  competitionRisk: 0.15,
  regulatoryRisk: 0.20
};
## Приклад розрахунку
const factors = {
  marketRisk: 7.0,
  technicalRisk: 5.0,
  financialRisk: 8.0,
  competitionRisk: 6.0,
  regulatoryRisk: 4.0
};
7.0 * 0.25 = 1.75
5.0 * 0.20 = 1.00
8.0 * 0.20 = 1.60
6.0 * 0.15 = 0.90
4.0 * 0.20 = 0.80
Результат

Risk Index=6.05

## Категорії ризику
- 0.0 – 2.5	🟢 Низький ризик
- 2.6 – 5.0	🟡 Середній ризик
- 5.1 – 7.5	🟠 Високий ризик
- 7.6 – 10.0	🔴 Критичний ризик

## Технологічний стек
- React
- JavaScript (ES Modules)
- Vite
- Tailwind CSS
- Zustand
- Recharts
- ESLint

## Архітектура

Проєкт побудований на основі:

Component-Based Architecture
Reactive State Management
Service Layer Pattern
MVC Adaptation
Responsive Dashboard UI

## Інтерфейс застосунку
Основні UI-компоненти
Navbar
Sidebar
RiskForm
ResultCard
RiskChart
RiskHistory

## Візуалізація даних

Для побудови графіків використовується бібліотека Recharts.

Реалізовані графіки:
Bar Chart
Radar Chart
Pie Chart

## Адаптивність

Інтерфейс побудований за принципом Mobile First та підтримує:

Desktop
Tablet
Mobile Layout

Tailwind CSS забезпечує responsive rendering без використання окремих mobile templates.

## Оптимізація продуктивності

У застосунку використовуються:

React.memo
useMemo
Zustand persist middleware
selector-based rendering

Це дозволяє:

зменшити кількість rerenders
оптимізувати rendering pipeline
покращити швидкодію SPA

## Local Storage Persistence

Історія розрахунків автоматично зберігається у localStorage браузера.

Після перезавантаження сторінки:

відновлюється стан застосунку
не втрачається історія розрахунків
зберігаються останні введені значення

## UML Документація

Проєкт містить UML-діаграми:

- Class.puml
- Component.puml
- Deployment.puml
- UseCase.puml
- MVC-Adaptation.puml

## Встановлення та запуск
### Встановлення залежностей
npm install
Запуск dev-сервера
npm run dev

Після запуску застосунок буде доступний за адресою:

http://localhost:5173

## Production Build
Збірка production build
npm run build

## Доступні команди
npm run dev        # запуск dev-сервера
npm run build      # production build
npm run preview    # preview production build
npm run lint       # ESLint перевірка
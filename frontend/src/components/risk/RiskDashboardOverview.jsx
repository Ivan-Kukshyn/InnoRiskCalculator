import DashboardStatCard from "../ui/DashboardStatCard";

const RiskDashboardOverview = ({
  completedCount,
  riskCalculated,
  riskCategory,
  riskIndex,
  totalCount,
}) => {
  const completionPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="mb-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Risk workspace
          </p>
          <h2 className="text-2xl font-bold text-slate-950">
            Панель оцінки інвестиційних ризиків
          </h2>
        </div>
        <p className="max-w-2xl text-sm text-slate-500">
          Оцініть фактори, перевірте загальний індекс і порівняйте структуру ризиків у графіках.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          accentClass="bg-indigo-500"
          label="Прогрес оцінки"
          value={`${completionPercent}%`}
          helper={`${completedCount} з ${totalCount} факторів заповнено`}
        />
        <DashboardStatCard
          accentClass="bg-emerald-500"
          label="Готовність"
          value={completedCount === totalCount ? "Готово" : "В роботі"}
          helper={completedCount === totalCount ? "Можна розрахувати індекс" : "Заповніть усі фактори"}
        />
        <DashboardStatCard
          accentClass="bg-amber-500"
          label="Поточний індекс"
          value={riskCalculated ? riskIndex.toFixed(2) : "--"}
          helper="Шкала від 0 до 10"
        />
        <DashboardStatCard
          accentClass="bg-rose-500"
          label="Категорія ризику"
          value={riskCalculated ? riskCategory.label : "Не визначено"}
          helper={riskCalculated ? "Результат останнього розрахунку" : "З'явиться після розрахунку"}
        />
      </div>
    </section>
  );
};

export default RiskDashboardOverview;

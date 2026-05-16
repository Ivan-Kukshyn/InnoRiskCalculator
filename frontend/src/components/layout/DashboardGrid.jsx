const DashboardGrid = ({ main, sidebar }) => (
  <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_21rem] xl:grid-cols-[minmax(0,1fr)_23rem]">
    <section className="min-w-0">{main}</section>
    <aside className="lg:sticky lg:top-24 lg:self-start">{sidebar}</aside>
  </div>
);

export default DashboardGrid;

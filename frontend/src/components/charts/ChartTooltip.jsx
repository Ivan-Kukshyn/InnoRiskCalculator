const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) {
    return null;
  }

  const data = payload[0].payload;
  const name = data?.name ?? label;
  const value = data?.value ?? payload[0].value;

  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-md">
      <p className="font-semibold text-slate-900">{name}</p>
      <p className="text-slate-600">Ризик: {Number(value).toFixed(2)} / 10</p>
    </div>
  );
};

export default ChartTooltip;

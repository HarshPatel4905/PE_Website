import { useState } from 'react';

export function RollCalculator() {
  const [format, setFormat] = useState<'single' | 'layflat'>('single');
  const [widthMm, setWidthMm] = useState<number>(1200);
  const [gussetMm, setGussetMm] = useState<number>(0);
  const [lengthM, setLengthM] = useState<number>(500);
  const [thicknessUm, setThicknessUm] = useState<number>(80);
  const [resinDensity, setResinDensity] = useState<number>(0.923);

  const effectiveWidthM =
    format === 'single'
      ? Math.max(0, widthMm) / 1000
      : (2 * (Math.max(0, widthMm) + Math.max(0, gussetMm))) / 1000;

  const netWeightKg = (effectiveWidthM * Math.max(0, lengthM) * Math.max(0, thicknessUm) * resinDensity) / 1000;
  const areaYieldSqmPerKg =
    thicknessUm > 0 && resinDensity > 0 ? 1000 / (thicknessUm * resinDensity) : 0;
  const mils = thicknessUm / 25.4;
  const gauge = mils * 100;

  return (
    <div className="bg-white border border-[#DCE6EF] p-6 sm:p-8">
      <div className="border-b border-[#DCE6EF] pb-4 mb-6">
        <h3 className="font-display text-lg font-bold text-[#102B46]">
          PE Film Roll Weight &amp; Gauge Reference Calculator
        </h3>
        <p className="mt-1 text-xs text-[#172536]/75">
          Illustrative engineering calculation for net film mass (excludes paperboard core weight and additive mineral fillers).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="block text-xs font-semibold text-[#102B46] mb-2">Web Format</span>
            <div className="inline-flex border border-[#DCE6EF] bg-[#F5F8FB] p-1">
              <button
                type="button"
                onClick={() => setFormat('single')}
                className={`px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                  format === 'single'
                    ? 'bg-white text-[#102B46] shadow-xs'
                    : 'text-[#172536]/75 hover:text-[#102B46]'
                }`}
              >
                Single-Wound Sheet (SWS)
              </button>
              <button
                type="button"
                onClick={() => setFormat('layflat')}
                className={`px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                  format === 'layflat'
                    ? 'bg-white text-[#102B46] shadow-xs'
                    : 'text-[#172536]/75 hover:text-[#102B46]'
                }`}
              >
                Layflat Tubing / Centre-Fold
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="calc-width" className="block text-xs font-semibold text-[#102B46] mb-1">
                {format === 'single' ? 'Web Width (mm)' : 'Layflat Width (mm)'}
              </label>
              <input
                id="calc-width"
                type="number"
                min={10}
                max={15000}
                value={widthMm}
                onChange={(e) => setWidthMm(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
              />
            </div>

            {format === 'layflat' && (
              <div>
                <label htmlFor="calc-gusset" className="block text-xs font-semibold text-[#102B46] mb-1">
                  Total Gusset Depth (mm)
                </label>
                <input
                  id="calc-gusset"
                  type="number"
                  min={0}
                  max={5000}
                  value={gussetMm}
                  onChange={(e) => setGussetMm(Number(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
                />
              </div>
            )}

            <div>
              <label htmlFor="calc-length" className="block text-xs font-semibold text-[#102B46] mb-1">
                Roll Length (m)
              </label>
              <input
                id="calc-length"
                type="number"
                min={1}
                max={50000}
                value={lengthM}
                onChange={(e) => setLengthM(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="calc-thickness" className="block text-xs font-semibold text-[#102B46] mb-1">
                Single-Wall Thickness (µm)
              </label>
              <input
                id="calc-thickness"
                type="number"
                min={5}
                max={1000}
                value={thicknessUm}
                onChange={(e) => setThicknessUm(Number(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#DCE6EF] focus:border-[#3977A8] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="calc-density" className="block text-xs font-semibold text-[#102B46] mb-1">
                Nominal Resin Density (g/cm³)
              </label>
              <select
                id="calc-density"
                value={resinDensity}
                onChange={(e) => setResinDensity(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums border border-[#DCE6EF] bg-white focus:border-[#3977A8] focus:outline-none"
              >
                <option value={0.923}>0.923 — LDPE / LLDPE Typical</option>
                <option value={0.935}>0.935 — MDPE Blend</option>
                <option value={0.95}>0.950 — HDPE Typical</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#F5F8FB] border border-[#DCE6EF] p-6 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="pb-3 border-b border-[#DCE6EF]">
              <p className="text-xs text-[#172536]/70">Calculated Net Film Weight</p>
              <p className="font-mono text-3xl font-bold text-[#102B46] tabular-nums mt-1">
                {netWeightKg.toFixed(2)} kg
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-[#172536]/70">Area Yield (Single Wall)</p>
                <p className="font-mono text-base font-semibold text-[#102B46] tabular-nums mt-0.5">
                  {areaYieldSqmPerKg.toFixed(2)} m²/kg
                </p>
              </div>
              <div>
                <p className="text-[#172536]/70">Unfolded Width</p>
                <p className="font-mono text-base font-semibold text-[#102B46] tabular-nums mt-0.5">
                  {(effectiveWidthM * 1000).toFixed(0)} mm
                </p>
              </div>
              <div>
                <p className="text-[#172536]/70">Equivalent Thickness (Mils)</p>
                <p className="font-mono text-base font-semibold text-[#102B46] tabular-nums mt-0.5">
                  {mils.toFixed(2)} mil
                </p>
              </div>
              <div>
                <p className="text-[#172536]/70">North American Gauge</p>
                <p className="font-mono text-base font-semibold text-[#102B46] tabular-nums mt-0.5">
                  {gauge.toFixed(0)} gauge
                </p>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[#172536]/65 leading-relaxed">
            Formula: Width (m) × Length (m) × Thickness (µm) × Density (g/cm³) ÷ 1,000. Verify exact core weight and pigment density with manufacturing partner quotes.
          </p>
        </div>
      </div>
    </div>
  );
}

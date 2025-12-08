'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label, Tooltip } from 'recharts';

const LeftPanel = () => {
  const data = [
    { name: 'Cổ phiếu', value: 90.7, color: '#d1c4e9' }, // Pastel lavender
    { name: 'Tiền', value: 9.3, color: '#f5f5f5' }, // White/Grey
  ];

  const totalAssets = 1728545023;
  const debt = 493519520;
  const nav = 1235025503;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('vi-VN').format(value);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1e1e1e] border border-[var(--card-border)] p-3 rounded shadow-lg text-xs z-50">
          <div className="flex items-center mb-1">
            <span className="text-white font-bold mr-1">Cổ phiếu</span>
            <span className="text-[var(--danger)] font-bold">↓ 7.2%</span>
          </div>
          <div className="text-white font-bold text-sm">
            1,899,650,000 (87.9%)
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full lg:w-1/3 pr-0 lg:pr-4 mb-6 lg:mb-0 flex flex-col">
      {/* Chart Section */}
      <div className="bg-[var(--card-bg)] rounded-lg p-6 mb-4 flex flex-col items-center relative flex-1 justify-center min-h-[300px]">
        {/* Fixed size container for consistent rendering */}
        <div className="h-64 w-64 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  value="Tổng tài sản"
                  position="center"
                  dy={-15}
                  className="fill-[var(--text-muted)] text-xs font-medium"
                />
                <Label
                  value="2,161.7 tr"
                  position="center"
                  dy={10}
                  className="fill-white text-xl font-bold"
                />
                <Label
                  value="↓ 6.4%"
                  position="center"
                  dy={35}
                  className="fill-[var(--danger)] text-xs font-bold"
                />
              </Pie>
              <Tooltip content={<CustomTooltip />} position={{ x: -20, y: 80 }} />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Chart Annotations - Positioned relative to the 64x64 container */}
          {/* Money Label (Top Right) */}
          <div className="absolute top-0 -right-8 flex flex-col items-start">
             <div className="flex items-end mb-1">
                <div className="w-8 h-[1px] bg-[var(--text-muted)] rotate-[-45deg] origin-bottom-left translate-y-2"></div>
                <span className="text-[10px] text-[var(--text-muted)] ml-1">Tiền</span>
             </div>
             <span className="text-sm font-bold text-white ml-4">12.1%</span>
          </div>
          
          {/* Stock Label (Bottom Left) */}
          <div className="absolute bottom-0 -left-8 flex flex-col items-end">
             <span className="text-[10px] text-[var(--text-muted)] mr-1">Cổ phiếu</span>
             <div className="flex items-start mt-1">
                <span className="text-sm font-bold text-white mr-4">87.9%</span>
                <div className="w-8 h-[1px] bg-[var(--text-muted)] rotate-[-45deg] origin-top-right -translate-y-2"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="space-y-3 text-sm bg-[var(--card-bg)] p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)]">Tổng tài sản</span>
          <span className="font-bold text-white tracking-wide">{formatCurrency(totalAssets)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)]">Nợ</span>
          <span className="font-bold text-white tracking-wide">{formatCurrency(debt)}</span>
        </div>
        <div className="border-t border-[var(--card-border)] my-2"></div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--text-muted)] font-bold">Tài sản ròng (NAV)</span>
          <span className="font-bold text-white tracking-wide">{formatCurrency(nav)}</span>
        </div>

        <button className="w-full mt-4 py-2.5 border border-[var(--danger)] text-[var(--danger)] rounded hover:bg-[var(--danger)] hover:text-white transition-colors uppercase text-[11px] font-bold tracking-wider">
          Xác nhận sao kê tài sản
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;

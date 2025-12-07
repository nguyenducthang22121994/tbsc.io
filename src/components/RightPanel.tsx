'use client';

import React, { useState } from 'react';
import { MoreVertical, History, RotateCw, ChevronDown, ArrowUpDown } from 'lucide-react';
import { clsx } from 'clsx';

interface StockData {
  symbol: string;
  totalQty: number;
  availableQty: number;
  avgPrice: number;
  marketPrice: number;
  marketPriceChange: number;
  pendingBuy: number;
  marketValue: number;
  costValue: number;
  profitPercent: number;
  profitValue: number;
  hasAlert?: boolean;
  alertType?: 'dot' | 'exclamation';
}

const RightPanel = () => {
  const [activeTab, setActiveTab] = useState('TaiSan');

  const tabs = [
    { id: 'TaiSan', label: 'Tài sản' },
    { id: 'No', label: 'Nợ' },
    { id: 'KhoanVay', label: 'Khoản vay' },
  ];

  const stockData: StockData[] = [
    { symbol: 'NVL', totalQty: 15000, availableQty: 15000, avgPrice: 16.44, marketPrice: 14.85, marketPriceChange: -1.0, pendingBuy: 0, marketValue: 222750000, costValue: 246555000, profitPercent: -9.7, profitValue: -23805000, hasAlert: true, alertType: 'dot' },
    { symbol: 'VND', totalQty: 6000, availableQty: 6000, avgPrice: 22.62, marketPrice: 19.00, marketPriceChange: -1.6, pendingBuy: 0, marketValue: 114000000, costValue: 135738000, profitPercent: -16.0, profitValue: -21738000 },
    { symbol: 'CII', totalQty: 2000, availableQty: 2000, avgPrice: 24.43, marketPrice: 26.30, marketPriceChange: -3.3, pendingBuy: 0, marketValue: 52600000, costValue: 48852000, profitPercent: 7.7, profitValue: 3748000 },
    { symbol: 'DXG', totalQty: 2000, availableQty: 2000, avgPrice: 22.34, marketPrice: 18.65, marketPriceChange: -2.6, pendingBuy: 0, marketValue: 37300000, costValue: 44674000, profitPercent: -16.5, profitValue: -7374000 },
    { symbol: 'SSI', totalQty: 11000, availableQty: 11000, avgPrice: 35.45, marketPrice: 32.25, marketPriceChange: -1.7, pendingBuy: 0, marketValue: 354750000, costValue: 389906000, profitPercent: -9.0, profitValue: -35156000, hasAlert: true, alertType: 'dot' },
    { symbol: 'TCB', totalQty: 3000, availableQty: 3000, avgPrice: 39.56, marketPrice: 34.70, marketPriceChange: -2.0, pendingBuy: 0, marketValue: 104100000, costValue: 118686000, profitPercent: -12.3, profitValue: -14586000 },
    { symbol: 'HPG', totalQty: 8000, availableQty: 8000, avgPrice: 28.75, marketPrice: 27.00, marketPriceChange: -1.1, pendingBuy: 0, marketValue: 216000000, costValue: 229976000, profitPercent: -6.1, profitValue: -13976000 },
    { symbol: 'SHS', totalQty: 15500, availableQty: 9000, avgPrice: 23.38, marketPrice: 21.60, marketPriceChange: -1.8, pendingBuy: 6500, marketValue: 334800000, costValue: 362343500, profitPercent: -7.6, profitValue: -27543500 },
    { symbol: 'SSI', totalQty: 1000, availableQty: 1000, avgPrice: 33.70, marketPrice: 32.25, marketPriceChange: -1.7, pendingBuy: 0, marketValue: 32250000, costValue: 33697000, profitPercent: -4.3, profitValue: -1447000, hasAlert: true, alertType: 'dot' },
    { symbol: 'SHS', totalQty: 8000, availableQty: 5000, avgPrice: 21.75, marketPrice: 21.60, marketPriceChange: -1.8, pendingBuy: 3000, marketValue: 172800000, costValue: 173960000, profitPercent: -0.7, profitValue: -1160000 },
    { symbol: 'VSC', totalQty: 5000, availableQty: 0, avgPrice: 23.28, marketPrice: 22.60, marketPriceChange: -2.2, pendingBuy: 5000, marketValue: 113000000, costValue: 116375000, profitPercent: -2.9, profitValue: -3375000 },
    { symbol: 'VND', totalQty: 5000, availableQty: 0, avgPrice: 19.41, marketPrice: 19.00, marketPriceChange: -1.6, pendingBuy: 5000, marketValue: 95000000, costValue: 97050000, profitPercent: -2.1, profitValue: -2050000 },
    { symbol: 'MBB', totalQty: 2000, availableQty: 2000, avgPrice: 24.86, marketPrice: 25.15, marketPriceChange: -2.1, pendingBuy: 0, marketValue: 50300000, costValue: 49726000, profitPercent: 1.2, profitValue: 574000, hasAlert: true, alertType: 'exclamation' },
  ];

  const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num);
  const formatCurrency = (num: number) => new Intl.NumberFormat('en-US').format(num);

  return (
    <div className="w-full lg:w-2/3 bg-[var(--card-bg)] rounded-lg flex flex-col h-full border border-[var(--card-border)]">
      {/* Tabs */}
      <div className="flex border-b border-[var(--card-border)] bg-[#121212] rounded-t-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={clsx(
              'flex-1 py-3 text-xs font-bold uppercase transition-colors relative border-r border-[var(--card-border)] last:border-r-0',
              activeTab === tab.id
                ? 'bg-[#2a2a2a] text-white after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--primary)]'
                : 'text-[var(--text-muted)] hover:bg-[#1e1e1e] hover:text-white'
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Account Summary */}
      <div className="p-3 border-b border-[var(--card-border)] bg-[#1e1e1e]">
        <div className="flex flex-wrap justify-between items-end">
          <div className="flex items-center space-x-6 mb-1 lg:mb-0">
            <div>
              <div className="text-[10px] text-[var(--text-muted)] mb-0.5">Tiểu khoản:</div>
              <div className="flex items-center text-xs text-white font-bold cursor-pointer hover:text-[var(--primary)] transition-colors">
                Tất cả <ChevronDown className="ml-1 w-3 h-3" />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--text-muted)] mb-0.5">Giá trị vốn</div>
              <div className="text-xs text-white font-bold">2,047,538,500</div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--text-muted)] mb-0.5">Lợi nhuận</div>
              <div className="text-xs text-[var(--danger)] font-bold">-147,888,500 (7.2%)</div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--text-muted)] mb-0.5">Tổng giá trị thị trường</div>
              <div className="text-xs text-white font-bold">1,899,650,000</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-[var(--text-muted)] text-xs">
            <div className="flex items-center cursor-pointer hover:text-white transition-colors">
              <History className="w-3 h-3 mr-1" /> Lịch sử
            </div>
            <div className="border-l border-[var(--card-border)] h-3 mx-1"></div>
            <RotateCw className="w-3 h-3 cursor-pointer hover:text-white transition-colors" />
            <MoreVertical className="w-3 h-3 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        <table className="w-full text-right border-collapse">
          <thead className="bg-[#121212] text-[var(--text-muted)] text-[10px] sticky top-0 z-10 font-normal uppercase tracking-wider">
            <tr>
              <th className="p-2 text-left font-medium border-b border-r border-[var(--card-border)]">
                <div className="flex items-center">
                  Mã <span className="bg-[#333333] px-1.5 py-0.5 rounded text-[9px] text-white ml-2">13</span>
                </div>
              </th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)] underline decoration-dashed decoration-[var(--text-muted)] underline-offset-4">SL Tổng</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)]">Được GD</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)] underline decoration-dashed decoration-[var(--text-muted)] underline-offset-4">Giá vốn</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)]">Thị giá</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)]">% Thị giá</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)]">Chờ về</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)] underline decoration-dashed decoration-[var(--text-muted)] underline-offset-4">Giá trị</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)] underline decoration-dashed decoration-[var(--text-muted)] underline-offset-4">Giá trị vốn</th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)]">
                <div className="flex items-center justify-end cursor-pointer">
                  % Lãi/Lỗ <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </th>
              <th className="p-2 font-medium border-b border-r border-[var(--card-border)] underline decoration-dashed decoration-[var(--text-muted)] underline-offset-4">Lãi/Lỗ</th>
              <th className="p-2 font-medium border-b border-[var(--card-border)]"></th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {/* Total Row */}
            <tr className="border-b border-[var(--card-border)] font-bold text-white bg-[#1e1e1e]">
              <td className="p-2 text-left border-r border-[var(--card-border)]">Tổng</td>
              <td className="p-2 border-r border-[var(--card-border)]"></td>
              <td className="p-2 border-r border-[var(--card-border)]"></td>
              <td className="p-2 border-r border-[var(--card-border)]"></td>
              <td className="p-2 border-r border-[var(--card-border)]"></td>
              <td className="p-2 border-r border-[var(--card-border)]"></td>
              <td className="p-2 border-r border-[var(--card-border)]"></td>
              <td className="p-2 border-r border-[var(--card-border)]">1,899,650,000</td>
              <td className="p-2 border-r border-[var(--card-border)]">2,047,538,500</td>
              <td className="p-2 text-[var(--danger)] border-r border-[var(--card-border)]">-7.2%</td>
              <td className="p-2 text-[var(--danger)] border-r border-[var(--card-border)]">-147,888,500</td>
              <td className="p-2"></td>
            </tr>
            {/* Data Rows */}
            {stockData.map((stock, index) => (
              <tr key={index} className="border-b border-[#2a2a2a] hover:bg-[#2a2a2a] transition-colors group">
                <td className="p-2 text-left font-bold text-[#00e5ff] flex items-center border-r border-[#2a2a2a]">
                  {stock.symbol}
                  {stock.hasAlert && stock.alertType === 'dot' && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-[#ff9100]"></span>}
                  {stock.hasAlert && stock.alertType === 'exclamation' && <span className="ml-auto text-[var(--danger)] font-bold">!</span>}
                </td>
                <td className="p-2 text-white group-hover:text-white/90 border-r border-[#2a2a2a]">{formatNumber(stock.totalQty)}</td>
                <td className="p-2 text-white group-hover:text-white/90 border-r border-[#2a2a2a]">{formatNumber(stock.availableQty)}</td>
                <td className="p-2 text-white group-hover:text-white/90 border-r border-[#2a2a2a]">{stock.avgPrice.toFixed(2)}</td>
                <td className="p-2 text-[var(--danger)] group-hover:text-[var(--danger)]/90 border-r border-[#2a2a2a]">{stock.marketPrice.toFixed(2)}</td>
                <td className="p-2 text-[var(--danger)] group-hover:text-[var(--danger)]/90 border-r border-[#2a2a2a]">{stock.marketPriceChange}%</td>
                <td className="p-2 text-white group-hover:text-white/90 border-r border-[#2a2a2a]">{stock.pendingBuy > 0 ? formatNumber(stock.pendingBuy) : '0'}</td>
                <td className="p-2 text-white group-hover:text-white/90 border-r border-[#2a2a2a]">{formatCurrency(stock.marketValue)}</td>
                <td className="p-2 text-white group-hover:text-white/90 border-r border-[#2a2a2a]">{formatCurrency(stock.costValue)}</td>
                <td className={clsx("p-2 font-medium border-r border-[#2a2a2a]", stock.profitPercent >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]")}>
                  {stock.profitPercent > 0 ? '+' : ''}{stock.profitPercent}%
                </td>
                <td className={clsx("p-2 font-medium border-r border-[#2a2a2a]", stock.profitValue >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]")}>
                  {stock.profitValue > 0 ? '+' : ''}{formatCurrency(stock.profitValue)}
                </td>
                <td className="p-2 text-[var(--text-muted)]">
                  <MoreVertical className="w-3 h-3 cursor-pointer ml-auto hover:text-white" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Last Updated */}
      <div className="p-1.5 text-[10px] text-[var(--text-muted)] border-t border-[var(--card-border)] bg-[#1e1e1e]">
        Cập nhật đến: 21:13 07/12/25
      </div>
    </div>
  );
};

export default RightPanel;

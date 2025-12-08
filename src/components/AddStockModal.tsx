import React, { useState } from 'react';
import { StockData } from './RightPanel';
import { X } from 'lucide-react';

interface AddStockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (stock: StockData) => void;
  initialData?: StockData;
}

const AddStockModal: React.FC<AddStockModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState<Partial<StockData>>({
    symbol: '',
    totalQty: 0,
    availableQty: 0,
    avgPrice: 0,
    marketPrice: 0,
    marketPriceChange: 0,
    pendingBuy: 0,
  });

  React.useEffect(() => {
    if (isOpen && initialData) {
      setFormData(initialData);
    } else if (isOpen && !initialData) {
      setFormData({
        symbol: '',
        totalQty: 0,
        availableQty: 0,
        avgPrice: 0,
        marketPrice: 0,
        marketPriceChange: 0,
        pendingBuy: 0,
      });
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'symbol' ? value.toUpperCase() : Number(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const totalQty = Number(formData.totalQty) || 0;
    const avgPrice = Number(formData.avgPrice) || 0;
    const marketPrice = Number(formData.marketPrice) || 0;
    
    const marketValue = totalQty * marketPrice;
    const costValue = totalQty * avgPrice;
    const profitValue = marketValue - costValue;
    const profitPercent = costValue !== 0 ? (profitValue / costValue) * 100 : 0;

    const newStock: StockData = {
      symbol: formData.symbol || '',
      totalQty,
      availableQty: Number(formData.availableQty) || 0,
      avgPrice,
      marketPrice,
      marketPriceChange: Number(formData.marketPriceChange) || 0,
      pendingBuy: Number(formData.pendingBuy) || 0,
      marketValue,
      costValue,
      profitPercent: Number(profitPercent.toFixed(1)),
      profitValue,
    };

    onSave(newStock);
    onClose();
    // Reset form
    setFormData({
      symbol: '',
      totalQty: 0,
      availableQty: 0,
      avgPrice: 0,
      marketPrice: 0,
      marketPriceChange: 0,
      pendingBuy: 0,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1e1e1e] border border-[var(--card-border)] rounded-lg w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-xl font-bold text-white mb-6">{initialData ? 'Chỉnh sửa mã chứng khoán' : 'Thêm mã chứng khoán'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-[var(--text-muted)] mb-1">Mã CK</label>
            <input
              type="text"
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] border border-[var(--card-border)] rounded p-2 text-white focus:outline-none focus:border-[var(--primary)]"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1">SL Tổng</label>
              <input
                type="number"
                name="totalQty"
                value={formData.totalQty}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-[var(--card-border)] rounded p-2 text-white focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1">Được GD</label>
              <input
                type="number"
                name="availableQty"
                value={formData.availableQty}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-[var(--card-border)] rounded p-2 text-white focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1">Giá vốn</label>
              <input
                type="number"
                step="0.01"
                name="avgPrice"
                value={formData.avgPrice}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-[var(--card-border)] rounded p-2 text-white focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1">Thị giá</label>
              <input
                type="number"
                step="0.01"
                name="marketPrice"
                value={formData.marketPrice}
                onChange={handleChange}
                className="w-full bg-[#2a2a2a] border border-[var(--card-border)] rounded p-2 text-white focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[var(--text-muted)] mb-1">Chờ về</label>
            <input
              type="number"
              name="pendingBuy"
              value={formData.pendingBuy}
              onChange={handleChange}
              className="w-full bg-[#2a2a2a] border border-[var(--card-border)] rounded p-2 text-white focus:outline-none focus:border-[var(--primary)]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-black font-bold py-3 rounded mt-6 hover:bg-[var(--primary)]/90 transition-colors"
          >
            {initialData ? 'Lưu thay đổi' : 'Thêm mới'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStockModal;

import React from 'react';

function InputBox({ label, amount, currencyOptions, onCurrencyChange, selectCurrency, onAmountChange, amountDisable }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <div className="mt-1 flex">
                <input
                    type="number"
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    disabled={amountDisable}
                />
                <select
                    className="p-2 border border-gray-300 rounded"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((option) => (
                        <option key={option} value={option}>
                            {option.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

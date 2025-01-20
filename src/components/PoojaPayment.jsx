"use client"
import React, { useState } from 'react';
import { CreditCard, Building, Wallet } from 'lucide-react';

const PoojaPayment = ({ product, astrologer, amount }) => {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const gst = amount * 0.18;
  const totalAmount = amount + gst;

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="bg-purple-500 text-white rounded-t-lg p-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          Payment Information
        </h2>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-3 gap-4 mb-6 text-sm md:text-base">
          <div className="font-semibold">PRODUCT</div>
          <div className="font-semibold">ASTROLOGER</div>
          <div className="font-semibold text-right">AMOUNT</div>
          
          <div className="text-gray-700">{product}</div>
          <div className="text-gray-700">{astrologer}</div>
          <div className="text-right">₹ {amount}</div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 border-t pt-4">
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">Base Amount</span>
            <span>₹ 100</span>
          </div>
          <div className="flex justify-between text-sm md:text-base">
            <span className="text-gray-600">GST @18%</span>
            <span>₹ {gst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base md:text-lg pt-2 border-t">
            <span>Total Payable Amount</span>
            <span>₹ {totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setSelectedMethod('card')}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedMethod === 'card'
              ? 'border-purple-500 bg-purple-50'
              : 'border-gray-200 hover:border-purple-300'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <CreditCard className={`w-6 h-6 ${
              selectedMethod === 'card' ? 'text-purple-500' : 'text-gray-500'
            }`} />
            <span className="text-sm font-medium">Credit/Debit Card</span>
          </div>
        </button>

        <button
          onClick={() => setSelectedMethod('netbanking')}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedMethod === 'netbanking'
              ? 'border-purple-500 bg-purple-50'
              : 'border-gray-200 hover:border-purple-300'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <Building className={`w-6 h-6 ${
              selectedMethod === 'netbanking' ? 'text-purple-500' : 'text-gray-500'
            }`} />
            <span className="text-sm font-medium">Net Banking</span>
          </div>
        </button>

        <button
          onClick={() => setSelectedMethod('wallet')}
          className={`p-4 rounded-lg border-2 transition-all ${
            selectedMethod === 'wallet'
              ? 'border-purple-500 bg-purple-50'
              : 'border-gray-200 hover:border-purple-300'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <Wallet className={`w-6 h-6 ${
              selectedMethod === 'wallet' ? 'text-purple-500' : 'text-gray-500'
            }`} />
            <span className="text-sm font-medium">Other Wallets</span>
          </div>
        </button>
      </div>

      {/* Pay Button */}
      <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 rounded-lg font-semibold transition-colors">
        Pay ₹{totalAmount.toFixed(2)}
      </button>
    </div>
  );
};

export default PoojaPayment;
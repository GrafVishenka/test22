import { useState } from 'react';

const SubscriptionCalculator = () => {
  const [age, setAge] = useState(6);
  const [weight, setWeight] = useState(7);
  const [diaperChanges, setDiaperChanges] = useState(8);

  const calculateMonthlyDiapers = () => diaperChanges * 30;

  const calculatePrice = () => {
    const diapers = calculateMonthlyDiapers();
    const basePrice = diapers * 15; // 15₽ за памперс
    return basePrice;
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold mb-6">
        Рассчитайте стоимость подписки
      </h3>
      <form className="space-y-4">
        <label className="flex flex-col">
          <span>Возраст (мес.)</span>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="border rounded p-2"
          />
        </label>
        <label className="flex flex-col">
          <span>Вес (кг)</span>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="border rounded p-2"
          />
        </label>
        <label className="flex flex-col">
          <span>Смена памперсов в день</span>
          <input
            type="number"
            value={diaperChanges}
            onChange={(e) => setDiaperChanges(Number(e.target.value))}
            className="border rounded p-2"
          />
        </label>
      </form>
      <div className="mt-6">
        <p>Памперсов в месяц: {calculateMonthlyDiapers()}</p>
        <p>Стоимость: {calculatePrice()}₽</p>
      </div>
    </div>
  );
};

export default SubscriptionCalculator;

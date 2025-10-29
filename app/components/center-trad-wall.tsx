

export default function CenterTradeWall() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="font-semibold text-lg text-gray-800 mb-2">
          HP EliteBook 860 G9 - Pristine Condition
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Bulk quantity of Grade A laptops, ready for export.
        </p>
        <div className="flex justify-between text-sm text-gray-700">
          <span>$580/unit</span>
          <span>500 pcs</span>
          <span>Grade A</span>
          <span>FOB Shanghai</span>
        </div>
      </div>

      {/* Add more mock posts */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="font-semibold text-lg text-gray-800 mb-2">
          Dell Latitude 7420 - Grade B
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Tested units, ready to ship. Great for bulk deals.
        </p>
        <div className="flex justify-between text-sm text-gray-700">
          <span>$460/unit</span>
          <span>1000 pcs</span>
          <span>Grade B</span>
          <span>FOB Hong Kong</span>
        </div>
      </div>
      
    </div>
  );
}

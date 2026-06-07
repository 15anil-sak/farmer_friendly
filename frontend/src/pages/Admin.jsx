import React from 'react';
import { Plus, Edit2, Trash2, Package, FileText, Bell, ShieldCheck } from 'lucide-react';

const AdminDashboard = () => {
  const tabs = [
    { label: 'Products', icon: <Package size={18} />, count: 48 },
    { label: 'Schemes', icon: <FileText size={18} />, count: 12 },
    { label: 'Broadcast', icon: <Bell size={18} />, count: null },
    { label: 'Admin Roles', icon: <ShieldCheck size={18} />, count: 3 },
  ];

  return (
    <div className="space-y-8 pb-10">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Admin Control</h2>
          <p className="text-gray-500">Manage products, schemes and users</p>
        </div>
        <button className="bg-primary text-white p-4 rounded-2xl shadow-lg hover:bg-primary-dark transition-all flex items-center gap-2 font-bold text-sm">
          <Plus size={20} /> Add New
        </button>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
        {tabs.map((tab, i) => (
          <button key={i} className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-500 border border-gray-100'}`}>
            {tab.icon}
            {tab.label}
            {tab.count !== null && <span className={`text-[10px] px-2 py-0.5 rounded-full ${i === 0 ? 'bg-white/20' : 'bg-gray-100 text-gray-400'}`}>{tab.count}</span>}
          </button>
        ))}
      </div>

      <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h4 className="font-bold text-gray-800">Product Inventory</h4>
          <span className="text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full uppercase">Recently Updated</span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Product</th>
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</th>
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Stock</th>
                <th className="p-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3, 4, 5].map(i => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=50" alt="" />
                      </div>
                      <span className="font-bold text-gray-700 text-sm">Neem Oil 500ml</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-bold uppercase">Pesticides</span>
                  </td>
                  <td className="p-5">
                    <span className="font-bold text-gray-600 text-sm">42 units</span>
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-gray-50/50 border-t border-gray-50 text-center">
          <button className="text-primary font-bold text-sm">Load More Products</button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

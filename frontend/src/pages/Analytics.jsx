import React from 'react';
import AnalyticsChart from '../components/AnalyticsChart';
import { Users, ShoppingBag, BookOpen, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const AnalyticsDashboard = () => {
  const stats = [
    { label: 'Total Users', value: '12.5k', change: '+12%', trend: 'up', icon: <Users />, color: 'bg-blue-500' },
    { label: 'Product Sales', value: '₹4.2L', change: '+18%', trend: 'up', icon: <ShoppingBag />, color: 'bg-green-500' },
    { label: 'Scheme Applied', value: '840', change: '-5%', trend: 'down', icon: <BookOpen />, color: 'bg-purple-500' },
    { label: 'AI Queries', value: '2.4k', change: '+24%', trend: 'up', icon: <TrendingUp />, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <header>
        <h2 className="text-2xl font-bold text-gray-800">Platform Analytics</h2>
        <p className="text-gray-500">Real-time usage and growth metrics</p>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <div className={`${stat.color} w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4`}>
              {stat.icon}
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h4 className="text-xl font-black text-gray-800">{stat.value}</h4>
              <div className={`flex items-center text-[10px] font-bold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart title="User Growth" type="area" />
        <AnalyticsChart title="Revenue Overview" type="line" />
      </div>

      <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h4 className="text-lg font-bold text-gray-800 mb-4">Top Performing Schemes</h4>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-primary border border-gray-100">
                  #{i}
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 text-sm">PM-Kisan Samman Nidhi</h5>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Income Support</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-gray-800 text-sm">4.2k</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase">Applications</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AnalyticsDashboard;

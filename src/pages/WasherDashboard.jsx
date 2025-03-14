import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaChartLine, FaClock, FaTshirt, FaCheck } from 'react-icons/fa';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

export default function WasherDashboard() {
  const FIXED_RATE_PER_LOAD = 75; // R75 per load

  const [upcomingOrders] = useState([
    {
      id: 1,
      customer: "John Doe",
      time: "2024-03-20T10:00:00",
      loads: 2,
      subscription: "Premium Care",
      address: "123 Main Street, Sandton",
      status: "Pending",
      payment: FIXED_RATE_PER_LOAD * 2
    },
    {
      id: 2,
      customer: "Jane Smith",
      time: "2024-03-20T14:30:00",
      loads: 3,
      subscription: "Standard",
      address: "456 Park Avenue, Rosebank",
      status: "Pending",
      payment: FIXED_RATE_PER_LOAD * 3
    },
    {
      id: 3,
      customer: "Mike Johnson",
      time: "2024-03-21T09:00:00",
      loads: 1,
      subscription: "Basic",
      address: "789 Oak Road, Bryanston",
      status: "Pending",
      payment: FIXED_RATE_PER_LOAD
    }
  ]);

  const [acceptedOrders] = useState([
    {
      id: 4,
      customer: "Sarah Wilson",
      time: "2024-03-19T15:00:00",
      loads: 2,
      subscription: "Standard",
      status: "Completed",
      payment: FIXED_RATE_PER_LOAD * 2
    }
  ]);

  const earningsOptions = {
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        return `Earnings: R${params[0].data}`
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: (value) => `R${value}`
      }
    },
    series: [{
      data: [525, 675, 450, 600, 375, 525, 750],
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#0ea5e9'
      },
      areaStyle: {
        color: '#e0f2fe'
      }
    }]
  };

  const handleAcceptOrder = (orderId) => {
    // Here you would typically update the order status in your backend
    console.log(`Accepted order ${orderId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Washer Dashboard</h1>
        <p className="text-gray-600 mt-2">Fixed rate: R{FIXED_RATE_PER_LOAD} per load</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Today's Earnings</p>
              <h3 className="text-2xl font-bold">R{FIXED_RATE_PER_LOAD * 6}</h3>
            </div>
            <FaChartLine className="text-primary-500 text-2xl" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Today's Loads</p>
              <h3 className="text-2xl font-bold">6 loads</h3>
            </div>
            <FaTshirt className="text-primary-500 text-2xl" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Completion Rate</p>
              <h3 className="text-2xl font-bold">98%</h3>
            </div>
            <FaCheck className="text-primary-500 text-2xl" />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Weekly Earnings</h2>
          <ReactECharts option={earningsOptions} style={{ height: '300px' }} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Available Orders</h2>
          <div className="space-y-4">
            {upcomingOrders.map((order) => (
              <motion.div 
                key={order.id} 
                className="border-b pb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{order.customer}</p>
                    <p className="text-gray-600">
                      {format(new Date(order.time), 'MMM d, h:mm a')}
                    </p>
                    <p className="text-gray-600">{order.loads} loads • {order.subscription}</p>
                    <p className="text-gray-600 text-sm">{order.address}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary-500">R{order.payment}</p>
                    <button
                      onClick={() => handleAcceptOrder(order.id)}
                      className="mt-2 px-4 py-1 text-sm bg-primary-500 text-white rounded-md hover:bg-primary-600"
                    >
                      Accept Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Completed Orders</h2>
        <div className="space-y-4">
          {acceptedOrders.map((order) => (
            <div key={order.id} className="border-b pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{order.customer}</p>
                  <p className="text-gray-600">
                    {format(new Date(order.time), 'MMM d, h:mm a')}
                  </p>
                  <p className="text-gray-600">{order.loads} loads • {order.subscription}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-500">R{order.payment}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
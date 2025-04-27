import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BookingChart = ({ appointments }) => {
  if (!appointments || appointments.length === 0) {
    return null;
  }

  // Format data for the chart
  const chartData = appointments.map(appointment => ({
    name: appointment.name.split(' ')[1], // Just use last name for brevity
    fee: appointment.fee
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Appointment Fees Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fee" fill="#3B82F6" name="Fee ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BookingChart;
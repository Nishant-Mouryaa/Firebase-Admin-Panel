import React from 'react';

const dashboardStyle = {
  background: '#f5f6fa',
  minHeight: '100vh',
  padding: '2rem',
};

const cardStyle = {
  background: '#fff',
  borderRadius: '14px',
  boxShadow: '6px 6px 54px 0px rgba(0,0,0,0.05)',
  padding: '1.5rem',
  marginBottom: '2rem',
};

const statsGrid = {
  display: 'flex',
  gap: '2rem',
  marginBottom: '2rem',
};

const statCard = {
  flex: 1,
  background: '#fff',
  borderRadius: '14px',
  boxShadow: '6px 6px 54px 0px rgba(0,0,0,0.05)',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const tableStyle = {
  width: '100%',
  background: '#fff',
  borderRadius: '14px',
  boxShadow: '6px 6px 54px 0px rgba(0,0,0,0.05)',
  padding: '1.5rem',
};

export default function Dashboard() {
  return (
    <div style={dashboardStyle}>
      <h2 style={{ fontWeight: 800, fontSize: 32, marginBottom: 32, color: '#202224' }}>Dashboard</h2>
      <div style={statsGrid}>
        <div style={statCard}>
          <div style={{ color: '#202224', opacity: 0.7, fontWeight: 600, fontSize: 16 }}>Total User</div>
          <div style={{ color: '#202224', fontWeight: 700, fontSize: 28, margin: '8px 0' }}>40,689</div>
          <div style={{ color: '#00b69b', fontWeight: 600, fontSize: 16 }}>+8.5% Up from yesterday</div>
        </div>
        <div style={statCard}>
          <div style={{ color: '#202224', opacity: 0.7, fontWeight: 600, fontSize: 16 }}>Total Order</div>
          <div style={{ color: '#202224', fontWeight: 700, fontSize: 28, margin: '8px 0' }}>10,293</div>
          <div style={{ color: '#00b69b', fontWeight: 600, fontSize: 16 }}>+1.3% Up from past week</div>
        </div>
        <div style={statCard}>
          <div style={{ color: '#202224', opacity: 0.7, fontWeight: 600, fontSize: 16 }}>Total Sales</div>
          <div style={{ color: '#202224', fontWeight: 700, fontSize: 28, margin: '8px 0' }}>Rs 89,000</div>
          <div style={{ color: '#f93c65', fontWeight: 600, fontSize: 16 }}>-4.3% Down from yesterday</div>
        </div>
      </div>
      <div style={cardStyle}>
        <h3 style={{ fontWeight: 700, fontSize: 24, color: '#202224', marginBottom: 16 }}>Sales Details</h3>
        <img src="http://localhost:3845/assets/15b5a6df06fb88dc272603730221a19616bd17b2.svg" alt="Sales Graph" style={{ width: '100%', maxWidth: 600, margin: '0 auto', display: 'block' }} />
      </div>
      <div style={tableStyle}>
        <h3 style={{ fontWeight: 700, fontSize: 24, color: '#202224', marginBottom: 16 }}>Order Details</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f1f4f9' }}>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Customer Name</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Location</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Date - Time</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Product</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Total Amount</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 12 }}>Nishant Mourya</td>
              <td style={{ padding: 12 }}>C/103 Daffodil Yashwant Nagar Virar West, 401303</td>
              <td style={{ padding: 12 }}>12.09.2019 - 12.53 PM</td>
              <td style={{ padding: 12 }}>2 x Normal Bottle</td>
              <td style={{ padding: 12 }}>Rs 70</td>
              <td style={{ padding: 12 }}><span style={{ background: '#00b69b', color: '#fff', borderRadius: 13.5, padding: '4px 16px', fontWeight: 700 }}>Delivered</span></td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>Apple Watch</td>
              <td style={{ padding: 12 }}>6096 Marjolaine Landing</td>
              <td style={{ padding: 12 }}>12.09.2019 - 12.53 PM</td>
              <td style={{ padding: 12 }}>423</td>
              <td style={{ padding: 12 }}>$34,295</td>
              <td style={{ padding: 12 }}><span style={{ background: '#fcbe2d', color: '#fff', borderRadius: 13.5, padding: '4px 16px', fontWeight: 700 }}>Pending</span></td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>Apple Watch</td>
              <td style={{ padding: 12 }}>6096 Marjolaine Landing</td>
              <td style={{ padding: 12 }}>12.09.2019 - 12.53 PM</td>
              <td style={{ padding: 12 }}>423</td>
              <td style={{ padding: 12 }}>$34,295</td>
              <td style={{ padding: 12 }}><span style={{ background: '#fd5454', color: '#fff', borderRadius: 13.5, padding: '4px 16px', fontWeight: 700 }}>Rejected</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 
import React from 'react';

const orders = [
  {
    date: '03.05.23',
    name: 'Snehal Gaikwad',
    building: 'DAFFODIL',
    wing: 'A',
    flat: '501',
    location: 'YASHWANT NAGAR',
    locality: 'VIRAR (W)',
    qty: 1,
    type: 'NORMAL',
    rate: 'RS 35',
    total: 'RS 35',
    delivery: 'RUPESH',
    status: 'Completed',
  },
  {
    date: '03.05.23',
    name: 'Nishant Mourya',
    building: 'LILY',
    wing: 'B',
    flat: '301',
    location: 'YASHWANT NAGAR',
    locality: 'VIRAR (W)',
    qty: 2,
    type: 'BISLERI',
    rate: 'RS 90',
    total: 'RS 45',
    delivery: 'RAJESH',
    status: 'Completed',
  },
  {
    date: '03.05.23',
    name: 'Atharva Sawant',
    building: 'VOILET',
    wing: 'A',
    flat: '403',
    location: 'YASHWANT NAGAR',
    locality: 'VIRAR (W)',
    qty: 1,
    type: 'NORMAL',
    rate: 'RS 35',
    total: 'RS 35',
    delivery: 'SONALI',
    status: 'Processing',
  },
  {
    date: '03.05.23',
    name: 'Rupesh Singh',
    building: 'DAFFODIL',
    wing: 'C',
    flat: '607',
    location: 'YASHWANT NAGAR',
    locality: 'VIRAR (W)',
    qty: 1,
    type: 'NORMAL',
    rate: 'RS 35',
    total: 'RS 35',
    delivery: 'RAVI',
    status: 'Processing',
  },
];

const statusColors = {
  Completed: { bg: '#00b69b20', color: '#00b69b' },
  Processing: { bg: '#6226ef20', color: '#6226ef' },
};

const Orders = () => {
  return (
    <div style={{ background: '#f5f6fa', minHeight: '100vh', padding: '2rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 32, marginBottom: 32, color: '#202224' }}>Order Lists</h2>
      {/* Filter Bar */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'center' }}>
        <span style={{ fontWeight: 700, color: '#202224' }}>Filter By</span>
        <select style={{ padding: 8, borderRadius: 8, border: '1px solid #d5d5d5' }}>
          <option>Order Type</option>
        </select>
        <select style={{ padding: 8, borderRadius: 8, border: '1px solid #d5d5d5', opacity: 0.4 }}>
          <option>Order Status</option>
        </select>
        <input type="date" style={{ padding: 8, borderRadius: 8, border: '1px solid #d5d5d5' }} />
        <button style={{ color: '#ea0234', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Reset Filter</button>
        <div style={{ flex: 1 }} />
        <input placeholder="Search" style={{ padding: 8, borderRadius: 8, border: '1px solid #d5d5d5', width: 200 }} />
      </div>
      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '6px 6px 54px 0px rgba(0,0,0,0.05)', padding: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#fcfdfd' }}>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>DATE</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>NAME</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>BUILDING</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>WING</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>FLAT NO.</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>LOCATION</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>LOCALITY</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Qty</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>TYPE</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>RATE</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>TOTAL</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>DELIVERY PERSON</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f4f9' }}>
                <td style={{ padding: 12 }}>{order.date}</td>
                <td style={{ padding: 12 }}>{order.name}</td>
                <td style={{ padding: 12 }}>{order.building}</td>
                <td style={{ padding: 12 }}>{order.wing}</td>
                <td style={{ padding: 12 }}>{order.flat}</td>
                <td style={{ padding: 12 }}>{order.location}</td>
                <td style={{ padding: 12 }}>{order.locality}</td>
                <td style={{ padding: 12 }}>{order.qty}</td>
                <td style={{ padding: 12 }}>{order.type}</td>
                <td style={{ padding: 12 }}>{order.rate}</td>
                <td style={{ padding: 12 }}>{order.total}</td>
                <td style={{ padding: 12 }}>{order.delivery}</td>
                <td style={{ padding: 12 }}>
                  <span style={{
                    background: statusColors[order.status].bg,
                    color: statusColors[order.status].color,
                    borderRadius: 4.5,
                    padding: '4px 16px',
                    fontWeight: 700,
                    fontSize: 12,
                  }}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 16, color: '#202224', opacity: 0.6, fontWeight: 600 }}>
          Showing 1-09 of 78
        </div>
      </div>
    </div>
  );
};

export default Orders; 
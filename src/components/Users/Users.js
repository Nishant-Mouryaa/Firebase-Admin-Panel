import React from 'react';

const users = [
  {
    name: 'Nishant Mourya',
    location: 'Daffodil C/103 Yashwant Nagar virar',
    contact: '8552964526',
    billAmount: 'Rs 423',
    dueDate: '1 July',
    status: 'Paid',
  },
  {
    name: 'Atharva Sawant',
    location: 'Daffodil C/103 Yashwant Nagar virar',
    contact: '8855044526',
    billAmount: 'Rs 500',
    dueDate: '16 July',
    status: 'Pending',
  },
  {
    name: 'Snehal Gaikwad',
    location: 'Daffodil C/103 Yashwant Nagar virar',
    contact: '9769307683',
    billAmount: 'Rs 800',
    dueDate: '21 July',
    status: 'Paid',
  },
];

const statusColors = {
  Paid: { bg: '#00b69b', color: '#fff' },
  Pending: { bg: '#fcbe2d', color: '#fff' },
};

const Users = () => {
  return (
    <div style={{ background: '#f5f6fa', minHeight: '100vh', padding: '2rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 32, marginBottom: 32, color: '#202224' }}>Users</h2>
      {/* Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
        <input placeholder="Search product name" style={{ padding: 8, borderRadius: 8, border: '1px solid #d5d5d5', width: 240 }} />
      </div>
      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '6px 6px 54px 0px rgba(0,0,0,0.05)', padding: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f1f4f9' }}>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Customer Name</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Location</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Contact</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Bill Amount</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Bill Due Date</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f4f9' }}>
                <td style={{ padding: 12 }}>{user.name}</td>
                <td style={{ padding: 12 }}>{user.location}</td>
                <td style={{ padding: 12 }}>{user.contact}</td>
                <td style={{ padding: 12 }}>{user.billAmount}</td>
                <td style={{ padding: 12 }}>{user.dueDate}</td>
                <td style={{ padding: 12 }}>
                  <span style={{
                    background: statusColors[user.status].bg,
                    color: statusColors[user.status].color,
                    borderRadius: 13.5,
                    padding: '4px 16px',
                    fontWeight: 700,
                    fontSize: 14,
                  }}>{user.status}</span>
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

export default Users; 
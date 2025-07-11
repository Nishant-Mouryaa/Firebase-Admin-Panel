import React from 'react';

const employees = [
  {
    name: 'Nishant Mourya',
    address: 'Daffodil C/103 Yashwant Nagar virar',
    contact: '8552964526',
    bottles: 42,
    salary: 'Rs 10,000',
    status: 'Paid',
  },
  {
    name: 'Atharva Sawant',
    address: 'Daffodil C/103 Yashwant Nagar virar',
    contact: '8855044526',
    bottles: 10,
    salary: 'Rs 8,000',
    status: 'Pending',
  },
  {
    name: 'Snehal Gaikwad',
    address: 'Daffodil C/103 Yashwant Nagar virar',
    contact: '9769307683',
    bottles: 20,
    salary: 'Rs 9,000',
    status: 'Paid',
  },
];

const statusColors = {
  Paid: { bg: '#00b69b', color: '#fff' },
  Pending: { bg: '#fcbe2d', color: '#fff' },
};

const Employees = () => {
  return (
    <div style={{ background: '#f5f6fa', minHeight: '100vh', padding: '2rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 32, marginBottom: 32, color: '#202224' }}>Delivery Person Details</h2>
      {/* Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
        <input placeholder="Search product name" style={{ padding: 8, borderRadius: 8, border: '1px solid #d5d5d5', width: 240 }} />
      </div>
      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '6px 6px 54px 0px rgba(0,0,0,0.05)', padding: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f1f4f9' }}>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Name</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Address</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Contact</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Bottles delivered</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Salary</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Status</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f4f9' }}>
                <td style={{ padding: 12 }}>{emp.name}</td>
                <td style={{ padding: 12 }}>{emp.address}</td>
                <td style={{ padding: 12 }}>{emp.contact}</td>
                <td style={{ padding: 12 }}>{emp.bottles}</td>
                <td style={{ padding: 12 }}>{emp.salary}</td>
                <td style={{ padding: 12 }}>
                  <span style={{
                    background: statusColors[emp.status].bg,
                    color: statusColors[emp.status].color,
                    borderRadius: 13.5,
                    padding: '4px 16px',
                    fontWeight: 700,
                    fontSize: 14,
                  }}>{emp.status}</span>
                </td>
                <td style={{ padding: 12 }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 8 }} title="Edit">
                    <span role="img" aria-label="edit">✏️</span>
                  </button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="Delete">
                    <span role="img" aria-label="delete">🗑️</span>
                  </button>
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

export default Employees; 
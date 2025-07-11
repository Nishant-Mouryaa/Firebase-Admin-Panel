import React from 'react';

const stockData = [
  {
    date: '01.08.2024',
    supplier: 'Chetan',
    brand: 'Bisleri',
    rate: 'Rs 35',
    openingStock: 20,
    quantity: 63,
    action: 'edit',
  },
  {
    date: '02.03.2024',
    supplier: 'Gupta',
    brand: 'Original',
    rate: 'Rs 50',
    openingStock: 20,
    quantity: 13,
    action: 'edit',
  },
];

const Stock = () => {
  return (
    <div style={{ background: '#f5f6fa', minHeight: '100vh', padding: '2rem' }}>
      <h2 style={{ fontWeight: 800, fontSize: 32, marginBottom: 32, color: '#202224' }}>Product Stock</h2>
      {/* Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
        <input placeholder="Search product name" style={{ padding: 8, borderRadius: 8, border: '1px solid #d5d5d5', width: 240 }} />
      </div>
      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '6px 6px 54px 0px rgba(0,0,0,0.05)', padding: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#fcfdfd' }}>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Date</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Supplier</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Brand</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Rate</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Opening Stock</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Quantity</th>
              <th style={{ padding: 12, textAlign: 'left', color: '#202224', fontWeight: 700 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f4f9' }}>
                <td style={{ padding: 12 }}>{item.date}</td>
                <td style={{ padding: 12 }}>{item.supplier}</td>
                <td style={{ padding: 12 }}>{item.brand}</td>
                <td style={{ padding: 12 }}>{item.rate}</td>
                <td style={{ padding: 12 }}>{item.openingStock}</td>
                <td style={{ padding: 12 }}>{item.quantity}</td>
                <td style={{ padding: 12 }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} title="Edit">
                    <span role="img" aria-label="edit">✏️</span>
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

export default Stock; 
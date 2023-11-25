// material-ui
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Users = () => {
  const userLogin = JSON.parse(localStorage.getItem('user')) || null;
  // const [rows, setRows] = useState([])

  useEffect(() => {
    console.log({ userLogin });
  }, [userLogin]);

  const columns = [
    { field: 'id', headerName: 'No', width: 80 },
    {
      field: 'fullname',
      headerName: 'Nama Lengkap',
      // description: 'This column has a value getter and is not sortable.',
      sortable: true,
      width: 300
    },
    { field: 'gender', headerName: 'Jenis Kelamin', width: 100 },
    {
      field: 'age',
      headerName: 'Usia (Tahun)',
      type: 'number',
      align: 'center',
      width: 150
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150
    },
    {
      field: 'is_active',
      headerName: 'Aktif',
      type: 'boolean',
      align: 'center',
      width: 150
    },
    {
      headerName: '#',
      align: 'center',
      width: 150
      // valueGetter: ({ row }) => `${fullname}`
    }
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    // }
  ];

  const rows = [
    { id: 1, fullname: 'Snow', gender: 'Laki-laki', age: 35, status: 'Menikah', is_active: true },
    { id: 2, fullname: 'Lannister', gender: 'Laki-laki', age: 42, status: 'Lajang', is_active: false },
    { id: 4, fullname: 'Stark', gender: 'Perempuan', age: 16, status: 'Menikah', is_active: true },
    { id: 5, fullname: 'Targaryen', gender: 'Perempuan', age: 17, status: 'Lajang', is_active: true },
    { id: 6, fullname: 'Melisandre', gender: 'Laki-laki', age: 150, status: 'Duda', is_active: true },
    { id: 7, fullname: 'Clifford', gender: 'Laki-laki', age: 44, status: 'Menikah', is_active: true },
    { id: 8, fullname: 'Frances', gender: 'Laki-laki', age: 36, status: 'Menikah', is_active: true },
    { id: 9, fullname: 'Roxie', gender: 'Perempuan', age: 65, status: 'Janda', is_active: true }
  ];

  return (
    <MainCard title="User List">
      <Typography variant="body2">Daftar Jamaah Kelompok Pondok Miri.</Typography>
      <div style={{ marginTop: 25, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </MainCard>
  );
};

export default Users;

import { Box } from "@mui/material";
import UserForm from "./UserForm.js";
import UsersTable from "./UsersTable.js";

const users =[
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'Johsss'
    },
    {
        id: 4,
        name: 'Smith'
    }
];
const Users = () => {
    return (
        <Box
            sx={{
                width:'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}>
            <UserForm />
            <UsersTable props rows={users}/>
        </Box>
    );
}

export default Users;
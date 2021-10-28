import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Style.css";

const UserTable = (props) => {
    const { users, removeUser, editRow } = props;
    return (
        <>
            <h2 className="view">View User</h2>
            <table className="container-fluid">
                <thead>
                    <tr>
                        <th className="col-md-4">Name</th>
                        <th className="col-md-4">Username</th>
                        <th className="col-md-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => {
                            return (
                                <tr keys={index}>
                                    <td className="col-md-4">{user.name}</td>
                                    <td className="col-md-4">
                                        {user.username}
                                    </td>
                                    <td className="col-md-4 btn-act">
                                        <button
                                            type="button"
                                            className="btn-edit btn-sm btn-warning"
                                            onClick={() => editRow(user)}
                                        >
                                            EDIT
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger"
                                            onClick={() => removeUser(user.id)}
                                        >
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td className="col-md-5">No users</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default UserTable;

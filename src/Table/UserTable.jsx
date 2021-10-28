import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Style.css";

const UserTable = () => {
    return (
        <>
            <h2>View User</h2>
            <table className="container-fluid">
                <thead>
                    <tr>
                        <th className="col-md-5">Name</th>
                        <th className="col-md-5">Username</th>
                        <th className="col-md-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="col-md-5">Name data</td>
                        <td className="col-md-5">Username data</td>
                        <td className="col-md-2">
                            <button className="button muted-button">
                                Edit
                            </button>
                            <button className="button muted-button">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default UserTable;

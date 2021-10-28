import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Style.css";

const AddUser = () => {
    return (
        <>
            <h2>Add User</h2>
            <label>Name</label>
            <input
                class="form-control form-control-lg"
                type="text"
                aria-label=".form-control-lg example"
            ></input>
            <label>Username</label>
            <input
                class="form-control form-control-lg"
                type="text"
                aria-label=".form-control-lg example"
            ></input>
            <button type="button" class="btn btn-primary">
                ADD
            </button>
        </>
    );
};
export default AddUser;

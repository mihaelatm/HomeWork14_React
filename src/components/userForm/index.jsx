import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions/actions";
import { useState } from "react";
import styles from "./styles.module.css";

function UserForm({ setUserInfo }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInfo(name, status);
    setName("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.user_form}>
      <h2 className={styles.user_title}>Edit User Information</h2>
      <label className={styles.user_text}>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />

      <label className={styles.user_text}>Status:</label>
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Save
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (name, status) => dispatch(setUserInfo(name, status)),
});

export default connect(null, mapDispatchToProps)(UserForm);

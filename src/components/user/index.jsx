import { connect } from "react-redux";
import styles from "./styles.module.css";

function User({ name, status }) {
  return (
    <div className={styles.user_container}>
      <h2 className={styles.user_title}>User Information</h2>
      <p className={styles.user_text}>Name: {name}</p>
      <p className={styles.user_text}>Status: {status}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);

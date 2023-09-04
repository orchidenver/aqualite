import Form from "../../components/Form";
import styles from "./FormPage.module.css";

export default function FormPage() {
  return (
    <section className="user-data">
      <h3 className="user-data__title">вкажіть інформацію для доставки</h3>
      <Form />
    </section>
  );
}

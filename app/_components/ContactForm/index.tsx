"use client";
import { useFormState } from "react-dom";
import styles from "./index.module.css";
import { createContactData } from "@/app/_actions/contact";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  // useFormStateは第一引数にServerActions、第二引数にServerActionsから受け取る初期値を指定できる
  const [state, formAction] = useFormState(createContactData, initialState);
  // stateにはServerActionsを通じてサーバーサイドで処理され、クライアントサイド(ブラウザ)に返ってくる値が入っている
  // -> そのため開発サーバーのログには何も表示されず、Google Chromeのデベロッパーツールのコンソールから確認する必要がある
  console.log(state);
  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label htmlFor="lastname" className={styles.label}>
            姓
          </label>
          <input
            type="text"
            className={styles.textfield}
            id="lastname"
            name="lastname"
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="firstname" className={styles.label}>
            名
          </label>
          <input
            type="text"
            className={styles.textfield}
            id="firstname"
            name="firstname"
          />
        </div>
      </div>
      <div className={styles.item}>
        <label htmlFor="company" className={styles.label}>
          会社名
        </label>
        <input
          type="text"
          className={styles.textfield}
          id="company"
          name="company"
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="email" className={styles.label}>
          メールアドレス
        </label>
        <input
          type="text"
          className={styles.textfield}
          id="email"
          name="email"
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="message" className={styles.label}>
          メッセージ
        </label>
        <textarea className={styles.textarea} id="message" name="message" />
      </div>
      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}

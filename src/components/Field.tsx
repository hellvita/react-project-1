import css from "../styles/Field.module.css";

export default function Field() {
  return (
    <>
      <div className={css["game-area"]}>
        <div className={css.block}></div>
        <div className={css.block}></div>
        <div className={css.block}></div>
        <div className={css.block}></div>
        <div className={css.block}></div>
        <div className={css.block}></div>
        <div className={css.block}></div>
        <div className={css.block}></div>
        <div className={css.block}></div>
      </div>
    </>
  );
}

import UseMemo_01 from "../components/memo/UseMemo_01";
import UseMemo_02 from "../components/memo/UseMemo_02";
import UseMemo_03 from "../components/memo/UseMemo_03";
import Button_returnHomePage from "../components/Button_returnHomePage";

export default function MemoPage() {
  return (
    <>
      <h1 className="esercizio" style={{ textAlign: "center" }}>
        Esercizi con useMemo
      </h1>
      <UseMemo_01 />
      <UseMemo_02 />
      <UseMemo_03 />
      <Button_returnHomePage />
    </>
  );
}

import CalendarioAcademico from "../components/CalendarioAcademico";
import MinhasDisciplinas from "../components/MinhasDisciplinas";
import MuralAvisos from "../components/MuralAvisos";
import PageTitle from "../components/PageTitle";

export default function Dashboard() {
  return (
    <>
      <PageTitle />
      <section>
        <MuralAvisos />
        <CalendarioAcademico />
        <MinhasDisciplinas />
      </section>
    </>
  );
}

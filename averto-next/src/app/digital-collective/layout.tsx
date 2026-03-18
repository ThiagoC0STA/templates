import DigitalAgencyFooter from "@/components/digital-agency/Footer";
import Header from "@/components/digital-agency/Header";
import "@/scss/style/style.scss";

export default function DigitalAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>{children}</main>
          <DigitalAgencyFooter />
        </div>
      </div>
    </>
  );
}

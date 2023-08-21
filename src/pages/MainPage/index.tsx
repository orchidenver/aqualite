import * as React from "react";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export interface IAppProps {}

export default function MainPage(props: IAppProps) {
  return (
    <>
      <div>MainPage</div>
      <Footer />
      <Card />
    </>
  );
}

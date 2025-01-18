import React from "react";
import Engine from "./engine";
import Transmission from "./transmission";

const Page = () => {
  return (
    <div className="container mx-auto py-6">
      {/* Engine Component */}
      <section className="mb-10">
        <Engine />
      </section>
      {/* Transmission Component */}
      <section>
        <Transmission />
      </section>
    </div>
  );
};
export default Page;

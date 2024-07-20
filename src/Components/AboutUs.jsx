import React from "react";
function AboutUs() {
  return (
    <>
      <header
        style={{
          backgroundColor: "antiquewhite",
          height: "max",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ padding: "15px", textAlign: "center" }}>About Me</h1>
      </header>
      <div
        className="container"
        style={{ padding: "22px", textAlign: "center" }}
      >
        <div className="container">
          <h1>Hiee there, It's me Samyak Nimsarkar.</h1>
          <h3>Nice to Meet you. :)</h3>
        </div>
      </div>
      <header
        style={{
          backgroundColor: "antiquewhite",
          height: "max",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <h2 style={{ padding: "15px", textAlign: "center" }}>
          About BeyondEternity
        </h2>
      </header>
    </>
  );
}

export default AboutUs;

import "./Section11";
import invest1 from "../Resources/invest1.png";
import invest2 from "../Resources/invest2.png";

function Section11() {
  return (
    <>
      <div className="home-inv">
        <div
          style={{
            marginLeft: "12%",
            marginTop: "5%",
            fontFamily:
              "Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif",
          }}
        >
          <h1>Investors</h1>
          <div className="home-hl"></div>

          <br />
          <br />

          <div
            className="marquee"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "30px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest1} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "30px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest1} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "white",
                borderRadius: "4px",
                paddingTop: "35px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img src={invest2} alt="inv" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section11;

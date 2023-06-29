import "./Section7.css";

function Section7() {
  const items = [
    {
      class: "lowest-price",
      pos: "-315px",
      heading: "One of the best Prices ",
      text: "Guaranteed",
    },
    {
      class: "unbiased-advice",
      pos: "-420px",
      heading: "Unbiased Advice",
      text: "Keeping customers first",
    },
    {
      class: "reliable",
      pos: "-102px",
      heading: "100% Reliable",
      text: "Regulated by IRDAI",
    },
    {
      class: "claim-support",
      pos: "0",
      heading: "Claims Support",
      text: "Made stress-free",
    },
    {
      class: "happy-help",
      pos: "-206px",
      heading: "Happy to Help",
      text: "Every day of the week",
    },
  ];
  return (
    <>
      <h2>PB Advantage</h2>
      <span></span>
      <br />
      <p className="text-header">
        When you buy insurance from us, you get more than just financial safety.
        You also get: our promise of simplifying complex insurance terms and
        conditions, quick stress-free claims, instant quotes from top insurers
        and being present for you in the toughest of times.
      </p>
      <a className="know knowmoreSeo" href="/#">
        Know more
      </a>
      <div className="list">
        <ul className="lisstt">
          {items.map((ele, index) => {
            return (
              <>
                {}
                <li
                  className="lisstt-item"
                  key={index}
                  style={{
                    marginRight: index !== items.length - 1 ? "24px" : "0",
                  }}
                >
                  <span
                    className={`sprite-image ${ele.class}`}
                    style={{ backgroundPosition: `0 ${ele.pos}` }}
                  ></span>
                  <div>
                    <p className="heading">{ele.heading}</p>
                    <p className="text">{ele.text}</p>
                  </div>
                </li>
                {/* {index !== items.length - 1 ? <>&ensp;</> : ""} */}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Section7;

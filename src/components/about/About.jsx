import React from "react";
import st from "./About.module.scss"

const About = ({data}) => {
  console.log(data);
  return (
    <main className={st.main}>
      <div className="container">
        <div>{data?.title}</div>
        <div>
          {data?.name?.label}
          {data?.name?.value}
        </div>
        <div>
          {data?.date?.label}
          {data?.date?.value}
        </div>
        <div>
          {data?.married?.label}
          {data?.married?.value}
        </div>
        <div>
          {data?.education?.label}
          {data?.education?.value}
        </div>
      </div>
    </main>
  );
}

export default About;
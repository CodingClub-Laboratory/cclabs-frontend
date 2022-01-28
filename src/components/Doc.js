import React from "react";

const duplicateText =
  "Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.";

const Heading = (props) => {
  return (
    <section>
      <h1 className="text-3xl text-blue-600 font-bold">{props.heading}</h1>
      <time className="inline-block my-4 text-xs" dateTime={props.date}>
        {props.date} {props.day}
      </time>
    </section>
  );
};

const Section = (props) => {
  return (
    <section>
      <h2 className="text-xl text-blue-200 font-semibold">{props.subHeading}</h2>
      <p className="my-3">{props.para}</p>
    </section>
  );
};

function Doc() {
  return (
    <article className="bg-[#F2F9FB] py-5 mt-16">
      <div className="mx-[35px] max-w-[700px] md:mx-auto ">
        <Heading
          heading="Lorem Ipsium Heading for Documentation"
          date="DD/MM/YYYY"
          day="Day"
        />
        <Section subHeading="SubHeading" para={duplicateText} />
        <Section subHeading="SubHeading" para={duplicateText} />
      </div>
    </article>
  );
}

export default Doc;

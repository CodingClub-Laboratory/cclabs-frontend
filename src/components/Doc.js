import React from "react";

const duplicateText =
  "Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.";

const Heading = (props) => {
  return (
    <section>
      <h1 className="text-3xl text-primary-600 font-bold">{props.heading}</h1>
      <time className="inline-block my-4 text-xs" dateTime={props.date}>
        {props.date} {props.day}
      </time>
    </section>
  );
};

const Section = (props) => {
  return (
    <section>
      <h2 className="text-xl text-primary-200 font-semibold">
        {props.subHeading}
      </h2>
      <p className="my-3">{props.para}</p>
    </section>
  );
};

const Main = () => {
  return (
    <div className="bg-[#F2F9FB] py-5">
      <div className="mx-[35px] max-w-[700px] md:mx-auto">
        <Heading
          heading="Lorem Ipsium Heading for Documentation"
          date="DD/MM/YYYY"
          day="Day"
        />
        <Section subHeading="SubHeading" para={duplicateText} />
        <Section subHeading="SubHeading" para={duplicateText} />
      </div>
    </div>
  );
};

const ForContact = (props) => {
  return (
    <div>
      <h2 className="text-xl">
        {props.firstname} {props.lastname}
      </h2>
      <p>
        {props.year}, {props.dept}
      </p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

const Contact = (props) => {
  return (
    <div className="bg-primary-600 p-3">
      <div className="mx-[35px] max-w-[700px] md:mx-auto py-4 text-white">
        <h1 className="text-2xl pb-4">To Contact</h1>
        <div className="grid gap-6 md:grid-cols-4 md:grid-rows-1">
          <ForContact
            firstname="First"
            lastname="Last"
            year="Year"
            dept="Dept"
            email="Email"
            phone="Phone no."
          />
          <ForContact
            firstname="First"
            lastname="Last"
            year="Year"
            dept="Dept"
            email="Email"
            phone="Phone no."
          />
          <ForContact
            firstname="First"
            lastname="Last"
            year="Year"
            dept="Dept"
            email="Email"
            phone="Phone no."
          />
        </div>
      </div>
    </div>
  );
};

function Doc() {
  return (
    <article className="mt-16">
      <Main />
      <Contact />
    </article>
  );
}

export default Doc;

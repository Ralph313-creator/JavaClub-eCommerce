import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="w-[73%] mx-auto my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <p className="text-[24px] tracking-[1.6px] leading-[36px] text-grey">
              <div className="text-[3rem] font-[600] text-black my-10 about-tittle relative">
                Our Story
              </div>
              The Java Club was founded in December 2022, following the global
              epidemic. Our firm was founded on the friendship of IT students.
              We became imaginative about how to keep our business running as we
              recovered from the epidemic. We started selling our coffee in Lipa
              and Batanggas, since it is one of the provinces that supplies
              coffee beans in our country. We are happy to promote and deliver
              excellent, flavorful Philippine-sourced coffee in response to the
              rising demand for specialty coffee. Because of its perfect climate
              and rich soils, both in the lowlands and in the mountain regions,
              the Philippines is one of the few countries that produces the four
              varieties of commercially viable coffee. The Java Club is a
              welcoming environment where we can appreciate our uniqueness and
              establish a feeling of community.
            </p>
          </div>
          <div>
            <img
              className="rounded-lg shadow"
              src="/assets/about1img.jpeg"
              alt="Img"
            />
          </div>
          <div className="order-last">
            <img
              className="rounded-lg shadow "
              src="/assets/about2img.jpeg"
              alt="Img"
            />
          </div>
          <div className="md:order-last">
            <p className="text-[24px] tracking-[1.6px] leading-[36px] text-grey">
              <div className="text-[3rem] font-[600] text-black my-10 about-tittle relative">
                What We Do?
              </div>
              Our goal is to provide a stylish, warm, and cozy local café to
              introduce flavors that most Filipinos grow up to love and enjoy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

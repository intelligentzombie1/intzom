import { Award, CircleCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <div>
      <section className="py-12 px-4 lg:px-10 xl:px-18 lg:flex lg:justify-center gap-4">
        <div className="lg:w-[60%] xl:w-[55%]">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">
                About Us
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#E0E1DD] max-w-lg mb-2">
              Why choose IntZom
            </h2>
            <p className="text-[#778DA9] max-w-sm mb-4 mr-4 text-left leading-relaxed">
              Founded in the UK, IntZom blends technical precision with
              community-driven values. We deliver cutting-edge MSP and AI
              solutions with professionalism and heart.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#E0E1DD] mb-6">
              Our Values
            </h3>
            <div className="text-[#778DA9] grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="inline-block border-t py-4 max-w-xs">
                <h4 className="text-xl font-semibold mb-2 text-[#E0E1DD]">
                  Integrity
                </h4>
                <p>
                  We uphold the highest standards of integrity in all our
                  actions.
                </p>
              </div>

              <div className="inline-block border-t py-4 max-w-xs">
                <h4 className="text-xl font-semibold mb-2 text-[#E0E1DD]">
                  Innovation
                </h4>
                <p> We constantly seek to innovate and improve our services.</p>
              </div>
              <div className="inline-block border-t py-4 max-w-xs">
                <h4 className="text-xl font-semibold mb-2 text-[#E0E1DD]">
                  Customer Commitment
                </h4>
                <p>
                  We develop relationships that make a positive difference in
                  our customers' lives.
                </p>
              </div>
              <div className="inline-block border-t py-4 max-w-xs">
                <h4 className="text-xl font-semibold mb-2 text-[#E0E1DD]">
                  Teamwork
                </h4>
                <p>
                  We work together, across boundaries, to meet the needs of our
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] xl:w-[45%] mt-8 lg:mt-0 lg:py-10">
          <img
            src="/images/about.jpg"
            alt="About IntZom"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
      <div className="py-12 px-4 lg:px-10 xl:px-18 text-[#E0E1DD]">
        <div className="lg:flex lg:justify-between gap-8">
          <div className="mb-8 lg:mb-0 lg:max-w-sm bg-[#1B263B] p-4 rounded-lg space-y-4">
            <h3 className="text-3xl font-bold mb-8 text-blue-300">
              What sets us apart:
            </h3>

            <span className="flex items-center gap-4 text-sm">
              <CircleCheck className="text-blue-300" />
              <p> Ethical, community-first approach to IT services</p>
            </span>
            <span className="flex items-center gap-4 text-sm">
              <CircleCheck className="text-blue-300" />
              <p>Strategic branding and outreach for social good</p>
            </span>
            <span className="flex items-center gap-4 text-sm">
              <CircleCheck className="text-blue-300" />
              <p>
                Hands-on experience across enterprise and grassroots projects
              </p>
            </span>
            <span className="flex items-center gap-4 text-sm">
              <CircleCheck className="text-blue-300" />
              <p>Local engagement through volunteering and events</p>
            </span>
          </div>
          <div className="lg:max-w-sm">
            <h3 className="text-3xl font-bold mb-4 text-blue-300">
              Ethical Technology for a Smarter Tomorrow
            </h3>
            <p className="text-[#778DA9] mb-4 mr-4 text-left leading-relaxed">
              INTZOM LTD is a modern technology company based in Cambridgeshire
              area of the United Kingdom, dedicated to delivering robust,
              ethical, and community-aligned IT services.
              <br /> Founded by Cloud Solutions architect{" "}
              <span className="text-[#E0E1DD]">Kayode Oshodi</span>, INTZOM
              specializes in hybrid cloud infrastructure, virtualization, and
              secure digital transformation for organizations seeking agility
              without compromising integrity.
            </p>
          </div>
          <div className="lg:max-w-sm">
            <h3 className="text-3xl font-bold mb-4 max-w-[400px] text-blue-300">
              Built for Impact. Driven by Integrity.
            </h3>
            <p className="text-[#778DA9] mb-4 mr-4 text-left leading-relaxed">
              We deliver secure, scalable, and community-conscious IT solutions
              that empower organizations to thrive in a digital-first world.
              Whether you're a growing business, a nonprofit, or a public sector
              team, our services are designed to simplify complexity, reduce
              costs, and unlock innovation—without compromising on ethics or
              inclusivity.
            </p>
          </div>
        </div>
        <div className="bg-[#1B263B] p-4 rounded-lg mt-12 px-10">
          <h2 className="text-4xl font-bold mb-4 max-w-[400px] text-blue-300">
            Our mission
          </h2>
          <p className="text-[#778DA9] mb-4 mr-4 text-left leading-relaxed lg:pr-20">
            INTZOM LTD was founded with a mission to blend technical excellence
            minimizing the time and resources to achieving excellence. Our team
            brings deep expertise in systems engineering, cloud architecture,
            alongside a passion for community outreach and education. We believe
            technology should serve people, not the other way around. That’s why
            we partner with organizations that value transparency, inclusion,
            and long-term sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

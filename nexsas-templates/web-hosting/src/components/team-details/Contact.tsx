import RevealAnimation from '../animation/RevealAnimation';

const Contact = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[200px] xl:pb-[200px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[650px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Contact</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Let us know how we can assist you</h2>
            </RevealAnimation>
          </div>
        </div>
        {/* contact form  */}
        <RevealAnimation delay={0.4}>
          <div className="bg-background-3 dark:bg-background-6 mx-auto w-full max-w-[850px] rounded-[32px] p-6 lg:p-11">
            <form action="#" method="post" className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
              {/* name field  */}
              <fieldset className="col-span-12 flex flex-col items-start justify-start gap-y-2 md:col-span-6">
                <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="Enter your name"
                  className="placeholder:text-tagline-1 dark:text-accent dark:placeholder:text-accent/60 dark:bg-background-6 border-stroke-3 dark:border-stroke-7 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                  aria-required="true"
                />
              </fieldset>
              {/* email field  */}
              <fieldset className="col-span-12 flex w-full flex-col items-start justify-start gap-2 md:col-span-6">
                <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Enter your email"
                  className="dark:text-accent placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:bg-background-6 border-stroke-3 dark:border-stroke-7 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                  aria-required="true"
                />
              </fieldset>
              {/* message field  */}
              <fieldset className="col-span-12 flex w-full flex-col items-start justify-start gap-2">
                <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                  Message
                </label>
                <textarea
                  name="messages"
                  id="messages"
                  required
                  placeholder="Enter your message"
                  className="dark:text-accent dark:placeholder:text-accent/60 dark:bg-background-6 border-stroke-3 dark:border-stroke-7 focus-visible:outline-primary-500 min-h-[207px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                  aria-required="true"
                  defaultValue={''}
                />
              </fieldset>
              {/* submit button */}
              <div className="col-span-12 mt-6 w-full">
                <button
                  type="submit"
                  className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md mx-auto w-full first-letter:uppercase before:content-none"
                  aria-label="Submit contact form">
                  Contact now
                </button>
              </div>
            </form>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Contact;

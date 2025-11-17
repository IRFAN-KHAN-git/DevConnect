import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-16 shadow-2xl">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 text-center mb-2">
          Terms of Service
        </h1>
        <p className="text-slate-400 text-center italic mb-12">
          Last Updated: When we remembered to write this
        </p>

        <div className="space-y-10 text-slate-300">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4 leading-relaxed">
              By using DevConnect, you agree to these terms. If you don't agree, well... 
              you're already here reading this, so technically you've already accepted them. 
              Gotcha! 🎣
            </p>
            <p className="leading-relaxed">
              Seriously though, if you disagree, please close this tab and go touch some grass. 
              We hear it's nice outside.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              2. User Conduct
            </h2>
            <p className="mb-4 leading-relaxed">You agree to:</p>
            <ul className="space-y-3 ml-6 list-disc marker:text-emerald-400">
              <li>Be nice to other developers (we're all just Googling stuff anyway)</li>
              <li>Not post "How to center a div" questions (just use flexbox, mate)</li>
              <li>Not claim you wrote code that ChatGPT obviously wrote</li>
              <li>Not argue about tabs vs spaces (it's spaces, fight me)</li>
              <li>Not DM people asking "can you teach me hacking?" (no, we cannot)</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              3. Content Ownership
            </h2>
            <p className="mb-4 leading-relaxed">
              You own your content. We don't want it. Seriously, we have enough bugs to fix 
              without worrying about your "revolutionary" to-do list app idea.
            </p>
            <p className="leading-relaxed">
              However, by posting on DevConnect, you grant us the right to display it. 
              Otherwise, what's the point? You want us to hide your posts? Weird flex, but okay.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              4. Account Security
            </h2>
            <p className="mb-4 leading-relaxed">
              Keep your password safe. Don't use "password123" or "admin". We'll judge you. 
              Hard. 👀
            </p>
            <p className="leading-relaxed">
              If someone hacks your account because you used "qwerty", that's on you, buddy. 
              We provided the tools; you provided the comedy.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              5. Prohibited Activities
            </h2>
            <p className="mb-4 leading-relaxed">You may NOT:</p>
            <ul className="space-y-3 ml-6 list-disc marker:text-emerald-400">
              <li>Post spoilers without warnings (you monster)</li>
              <li>Spam "First!" on every post (this isn't YouTube in 2009)</li>
              <li>Share cryptocurrency investment advice (sir, this is a Wendy's)</li>
              <li>Upload viruses (we have enough bugs already, thanks)</li>
              <li>Pretend Python is better than JavaScript (it is, but still)</li>
              <li>Ask "Is this framework dead?" about frameworks from last year</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              6. Intellectual Property
            </h2>
            <p className="mb-4 leading-relaxed">
              All code examples posted here are probably copied from Stack Overflow anyway, 
              so let's not pretend we own anything original. 
            </p>
            <p className="leading-relaxed">
              DevConnect logo and branding belong to us. Please don't steal it to make your 
              "totally different" developer community called "CodeConnect." We see you. 👁️
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              7. Service Availability
            </h2>
            <p className="mb-4 leading-relaxed">
              We try to keep DevConnect running 24/7. But sometimes things break. 
              Like that time I pushed to production on a Friday at 5 PM. 
              My bad. 🔥
            </p>
            <p className="leading-relaxed">
              If the site is down, check Twitter where we'll be crying about it in real-time.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              8. Termination
            </h2>
            <p className="mb-4 leading-relaxed">
              We can terminate your account if you're being a jerk. What defines "jerk"? 
              We'll know it when we see it. Don't test us.
            </p>
            <p className="leading-relaxed">
              If you want to delete your account, go ahead. We'll miss you for approximately 
              3 seconds. Then we'll forget you existed. No hard feelings. ✌️
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              9. Disclaimer of Warranties
            </h2>
            <p className="mb-4 leading-relaxed">
              DevConnect is provided "as is." We make no promises that it won't randomly break 
              at 3 AM when you need it most. That's just how software works, baby! 🎲
            </p>
            <p className="leading-relaxed">
              Any advice you get here is from random internet strangers. 
              Use at your own risk. We're not responsible if someone tells you to 
              "delete System32" and you actually do it.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              10. Limitation of Liability
            </h2>
            <p className="mb-4 leading-relaxed">
              If DevConnect somehow causes your computer to explode, your cat to leave you, 
              or your code to compile on the first try (scary), we are NOT liable.
            </p>
            <p className="leading-relaxed">
              Maximum damages we'll pay: $0.00. Or one free hug. Your choice.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              11. Changes to Terms
            </h2>
            <p className="mb-4 leading-relaxed">
              We can change these terms whenever we want. Will we notify you? 
              Maybe. Probably not. Who actually reads these anyway?
            </p>
            <p className="mb-2 leading-relaxed">
              Oh, you're still reading? Impressive. Have a cookie. 🍪 
              (Not a real cookie. Definitely not a tracking cookie. We promise.*)
            </p>
            <p className="text-sm text-slate-500 italic">*Probably</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              12. Governing Law
            </h2>
            <p className="mb-4 leading-relaxed">
              These terms are governed by the laws of... uh... the Internet? 
              Is that a jurisdiction? Our lawyer said we need this section, 
              so here it is. 
            </p>
            <p className="leading-relaxed">
              Disputes will be settled by rock-paper-scissors. 
              Best 2 out of 3. Final offer.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              13. Contact Us
            </h2>
            <p className="mb-4 leading-relaxed">
              Questions about these terms? Email us at:{' '}
              <a 
                href="mailto:definitely-not-real@devconnect.com"
                className="text-emerald-400 hover:text-emerald-300 underline decoration-dotted transition-colors"
              >
                definitely-not-real@devconnect.com
              </a>
            </p>
            <p className="leading-relaxed">
              (Seriously though, make a GitHub issue or something. We actually check those.)
            </p>
          </section>

          {/* Fun Footer */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white text-center">
            <p className="text-lg font-semibold mb-3">
              🎉 Congratulations! You read the entire Terms of Service!
            </p>
            <p className="mb-3">
              You're in the top 0.01% of internet users. Your achievement has been logged 
              in our database and will be forgotten immediately.
            </p>
            <p className="text-sm">
              Now go build something cool. Or don't. We're not your mom.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-16 shadow-2xl">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 text-center mb-2">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-center italic mb-12">
          AKA: What we do with your data (spoiler: not much)
        </p>

        <div className="space-y-10 text-slate-300">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              1. Information We Collect
            </h2>
            <p className="mb-4 leading-relaxed">We collect:</p>
            <ul className="space-y-3 ml-6 list-disc marker:text-emerald-400">
              <li>Your email (to send you password reset links you'll never use)</li>
              <li>Your username (so we can @ you in arguments)</li>
              <li>Your posts (duh, that's the whole point)</li>
              <li>Your tears when your code doesn't work (jk, we don't have that technology yet)</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              We do NOT collect your social security number, your Netflix password, 
              or your secret crush's name. Though we're curious about that last one. 👀
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              2. How We Use Your Information
            </h2>
            <p className="mb-4 leading-relaxed">Your data is used to:</p>
            <ul className="space-y-3 ml-6 list-disc marker:text-emerald-400">
              <li>Show you your own posts (wild concept, we know)</li>
              <li>Let other people see your posts (again, that's the point)</li>
              <li>Send you notifications (which you'll immediately disable)</li>
              <li>Make you feel like part of a community (aww)</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              We do NOT sell your data to advertisers, robot overlords, or your ex. 
              We're not monsters.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              3. Cookies
            </h2>
            <p className="mb-4 leading-relaxed">
              Yes, we use cookies. No, not the chocolate chip kind (we wish). 
              We use them to remember you're logged in. Otherwise, you'd have to 
              login on every page refresh. Annoying, right?
            </p>
            <p className="leading-relaxed">
              Our cookies don't track what you eat for breakfast or which cat videos 
              you watched at 3 AM. We don't care. Promise. 🍪
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              4. Third-Party Services
            </h2>
            <p className="mb-4 leading-relaxed">We use:</p>
            <ul className="space-y-3 ml-6 list-none">
              <li>
                <span className="font-semibold text-slate-100">MongoDB Atlas</span> - They host our database. 
                They probably know more about you than we do. Take it up with them.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Vercel/Netlify</span> - They host our site. 
                They make sure you can actually access DevConnect instead of getting 404 errors.
              </li>
              <li>
                <span className="font-semibold text-slate-100">Google Fonts</span> - So our text looks pretty. 
                Google already knows everything about you anyway. 🤷
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              These companies have their own privacy policies. Go read them. 
              Or don't. We know you won't.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              5. Data Security
            </h2>
            <p className="mb-4 leading-relaxed">
              We take security seriously. Your password is hashed with bcrypt. 
              Even we can't see it. If you forget it, we can't help you. 
              We'll just send you a reset link and judge you silently. 🔐
            </p>
            <p className="leading-relaxed">
              We use HTTPS, JWT tokens, and other fancy acronyms that make us sound 
              like we know what we're doing. Spoiler: We Googled all of this.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              6. Your Rights
            </h2>
            <p className="mb-4 leading-relaxed">You have the right to:</p>
            <ul className="space-y-3 ml-6 list-disc marker:text-emerald-400">
              <li>Access your data (it's literally in your profile, go look)</li>
              <li>Delete your account (we'll miss you for 3 seconds, tops)</li>
              <li>Export your data (send us an email, we'll zip it up for you)</li>
              <li>Complain (we have a GitHub issues page for that)</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              You do NOT have the right to demand we make dark mode lighter because 
              "it hurts your eyes." That's what dark mode is for, Karen. 😤
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              7. Children's Privacy
            </h2>
            <p className="mb-4 leading-relaxed">
              DevConnect is not for kids under 13. Not because of legal reasons 
              (okay, partially), but because we discuss complex coding topics. 
              Go play Minecraft or something.
            </p>
            <p className="leading-relaxed">
              If you're 13-17, cool! Just don't tell us your age. 
              We don't want to deal with that paperwork.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              8. International Users
            </h2>
            <p className="mb-4 leading-relaxed">
              DevConnect is hosted... somewhere. The cloud? The internet? 
              Who knows where servers actually live anymore. 
            </p>
            <p className="mb-4 leading-relaxed">
              If you're in the EU: Yes, we're GDPR compliant. Probably. 
              We read the documentation. Sort of. We tried.
            </p>
            <p className="leading-relaxed">
              If you're in California: Yes, we know about CCPA. 
              Your data is safe. We promise. Cross our hearts. 🤞
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              9. Data Retention
            </h2>
            <p className="mb-4 leading-relaxed">
              We keep your data until you delete your account. Then we delete it. 
              Poof. Gone. Like it never existed.
            </p>
            <p className="leading-relaxed">
              (Okay, fine. Backups might keep it for 30 days. But then it's really gone. 
              For real this time.)
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              10. Changes to This Policy
            </h2>
            <p className="mb-4 leading-relaxed">
              We might update this policy if laws change or if we add cool new features 
              that require collecting more data (like when we add AI that reads your mind).
            </p>
            <p className="leading-relaxed">
              Will we notify you of changes? Sure, why not. We'll send an email. 
              You'll mark it as spam. The circle of life. 🦁
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              11. Analytics
            </h2>
            <p className="mb-4 leading-relaxed">
              We use basic analytics to see how many people visit DevConnect. 
              This helps us know if anyone actually uses this thing or if we're shouting 
              into the void.
            </p>
            <p className="mb-4 leading-relaxed">
              We track things like: page views, button clicks, and how many people 
              rage-quit after seeing a 404 page. Standard stuff.
            </p>
            <p className="leading-relaxed">
              We do NOT track your mouse movements, keystrokes, or how many times you 
              refreshed the page hoping for more notifications (it's okay, we all do it).
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              12. AI and Machine Learning
            </h2>
            <p className="mb-4 leading-relaxed">
              Currently, we don't use AI. Everything you see was coded by a sleep-deprived 
              developer fueled by coffee and existential dread. Authentic, right?
            </p>
            <p className="leading-relaxed">
              If we add AI in the future, we'll update this policy. 
              Don't worry, we're not training Skynet. Yet. 🤖
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-semibold text-emerald-400 mb-4 pb-2 border-b border-slate-700">
              13. Contact Us
            </h2>
            <p className="mb-4 leading-relaxed">
              Privacy questions? Concerns? Want to chat about your favorite programming memes?
            </p>
            <p className="mb-4 leading-relaxed">
              Reach us at:{' '}
              <a 
                href="mailto:privacy@devconnect.com"
                className="text-emerald-400 hover:text-emerald-300 underline decoration-dotted transition-colors"
              >
                privacy@devconnect.com
              </a>
            </p>
            <p className="leading-relaxed text-sm">
              (This email is checked every Tuesday. Maybe. If we remember.)
            </p>
          </section>

          {/* Fun Footer */}
          <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white text-center">
            <p className="text-lg font-semibold mb-3">
              🎊 You made it through the Privacy Policy!
            </p>
            <p className="mb-3">
              Achievement Unlocked: "Actually Cares About Privacy" 🏆
            </p>
            <p className="mb-3">
              Your reward: The knowledge that your data is safe with us. 
               You're welcome.
            </p>
            <p className="text-sm">
              Now go forth and code! May your bugs be few and your commits be meaningful. 
              (They won't be, but we can dream.)
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
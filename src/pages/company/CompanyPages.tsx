
export const About = () => (
    <div className="space-y-16 lg:space-y-24">
        {/* 1. Hero / Headline */}
        <section className="text-center max-w-4xl mx-auto pt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                We Are Tenbox. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Storage That Defies Gravity.
                </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Secure, high-capacity cloud storage designed to connect your digital life—from your smartphone to your living room.
            </p>
        </section>

        {/* 2. Who We Are */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                        Tenbox is a forward-thinking cloud storage provider committed to making digital freedom accessible to everyone. We offer a secure and convenient home for your data, starting with an industry-leading <strong>1024 GB (1 TB) of free storage</strong>.
                    </p>
                    <p>
                        Our journey took a major leap forward in November 2021 through a strategic collaboration with <strong>Pixela Corporation</strong>. Together, we introduced seamless cloud storage services for "Xit AirBox" and "Xit Base" TV tuners, enabling cloud recording of TV programs.
                    </p>
                    <p>
                        This partnership reflects our core belief: high-capacity cloud storage acts as the essential bridge connecting traditional media, television, and the internet in our increasingly diverse digital lives.
                    </p>
                </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/5 shadow-2xl">
                <blockquote className="text-lg text-gray-300 italic mb-6">
                    "We will continue our efforts to offer convenient services, aiming to enhance everyone's comfort in their daily lives."
                </blockquote>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">T</div>
                    <div>
                        <div className="font-bold text-white">The Tenbox Team</div>
                        <div className="text-xs text-primary">Global Innovators</div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. Our Mission */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                To provide a secure, convenient, and massive storage ecosystem that empowers everyone to capture, save, and share their world—without limits. We believe your data should be safe, accessible, and truly yours.
            </p>
        </section>

        {/* 4. What We Do */}
        <section>
            <h2 className="text-3xl font-bold text-white mb-10 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/50 transition-colors">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Massive Cloud Storage</h3>
                    <p className="text-gray-400">
                        We give every user 1 TB of free space. That's enough for 400,000 photos, 2,500 movies, or millions of documents.
                    </p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/50 transition-colors">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Seamless Connection</h3>
                    <p className="text-gray-400">
                        From mobile backups to our TV tuner integration, we build bridges between your devices so your content flows freely.
                    </p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900 border border-white/5 hover:border-primary/50 transition-colors">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Community Rewards</h3>
                    <p className="text-gray-400">
                        Our Referral Program allows users to earn real income. Many of our partners earn substantial returns simply by sharing efficient tools.
                    </p>
                </div>
            </div>
        </section>

        {/* 5. How We Are Different */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="space-y-6">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <p className="text-gray-300 text-sm mb-2">Renji Kobayashi, Referral Program User</p>
                        <p className="text-white italic">"Up to now, I’ve earned over $2000... which has made a significant difference for my family and me."</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <p className="text-gray-300 text-sm mb-2">Jamaluddin Nasution, Student</p>
                        <p className="text-white italic">"Tenbox has been a game-changer... I can now seamlessly store and share all my lecture notes, research papers, and group project files."</p>
                    </div>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-white mb-6">How We Are Different</h2>
                <ul className="space-y-4">
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">01.</span>
                        <span className="text-gray-300"><strong>Unmatched Generosity:</strong> While others offer 15GB, we offer 1024GB. We believe space shouldn't be a luxury.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">02.</span>
                        <span className="text-gray-300"><strong>User-Centric Growth:</strong> We grow when you succeed. Our unique referral program turns users into partners.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="text-primary font-bold">03.</span>
                        <span className="text-gray-300"><strong>Zero-Knowledge Security:</strong> We prioritize your privacy with encryption that ensures only you hold the keys to your data.</span>
                    </li>
                </ul>
            </div>
        </section>

        {/* 6. Our Values */}
        <section>
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: 'Security', desc: 'Your data is yours. We protect it with banking-grade encryption.' },
                    { title: 'Innovation', desc: 'Connecting TVs, phones, and computers in new ways.' },
                    { title: 'Accessibility', desc: 'Providing tools that are easy to use for everyone, everywhere.' },
                    { title: 'Transparency', desc: 'Open about our policies, clear about our mission.' }
                ].map((val, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                        <h3 className="font-bold text-white mb-2">{val.title}</h3>
                        <p className="text-sm text-gray-400">{val.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 8. Call to Action */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Journey with Tenbox</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join millions of users who have switched to a smarter, larger, and safer cloud. Claim your 1024 GB of free storage today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                    Get 1TB Free Storage
                </button>
            </div>
        </section>
    </div>
);

export const Blog = () => (
    <div className="space-y-12">
        {[1, 2, 3].map((i) => (
            <article key={i} className="border-b border-white/10 pb-8 last:border-0">
                <span className="text-primary text-sm font-medium">Product Update • Dec {20 + i}, 2025</span>
                <h2 className="text-2xl font-bold text-white mt-2 mb-3 hover:text-primary cursor-pointer transition-colors">
                    The Future of Decentralized Storage v{i}.0
                </h2>
                <p className="text-gray-400 mb-4">
                    Explore how we are making zero-knowledge encryption faster and more accessible than ever before...
                </p>
                <button className="text-sm font-bold text-white hover:underline">Read more &rarr;</button>
            </article>
        ))}
    </div>
);

export const Careers = () => (
    <div>
        <h2 className="text-3xl font-bold text-white mb-8">Join the Crew</h2>
        <p className="text-gray-300 mb-12">
            Help us build the future of the internet. We are looking for passionate individuals who care about privacy and design.
        </p>

        <div className="space-y-4">
            {[
                { role: 'Senior Rust Engineer', team: 'Core Systems', loc: 'Remote' },
                { role: 'Product Designer', team: 'Design', loc: 'San Francisco' },
                { role: 'DevOps Specialist', team: 'Infrastructure', loc: 'Remote' }
            ].map((job, i) => (
                <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer group">
                    <div>
                        <h3 className="font-bold text-white group-hover:text-primary transition-colors">{job.role}</h3>
                        <p className="text-sm text-gray-400">{job.team} • {job.loc}</p>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium group-hover:bg-primary group-hover:text-black transition-all">
                        Apply
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export const Contact = () => (
    <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="John Doe" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="john@example.com" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Send Message
            </button>
        </form>
    </div>
);
// ... (previous content)

export const Help = () => {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-white mb-6">Help Center</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                    The Tenbox Help Center is designed to help you get the most out of your cloud storage account and quickly resolve any issues you encounter. We organize assistance into clear categories to get you the answers you need.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3">Premium Membership</h3>
                        <p className="text-gray-400 mb-4">Learn about Premium benefits, how to purchase or cancel specific plans, and how to manage automatic renewals.</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• What benefits come with Premium?</li>
                            <li>• Subscription & Refund Policy</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3">Storage & Backup</h3>
                        <p className="text-gray-400 mb-4">Guides on how automatic backup works, managing your 1TB free storage, and what happens if your plan expires.</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                            <li>• Automatic Phone Backup</li>
                            <li>• Managing Large Files</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3">Account Management</h3>
                        <p className="text-gray-400 mb-4">Support for login issues, password recovery, profile settings, and security configurations like 2FA.</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3">Transfer & Sharing</h3>
                        <p className="text-gray-400 mb-4">How to share files securely with links, manage permissions, and troubleshoot download/upload speeds.</p>
                    </div>
                </div>
            </section>

            <section className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-white mb-4">Need Direct Support?</h3>
                <p className="text-gray-300 mb-6">
                    If you can't find the answer in our guides, our support team is ready to assist with technical problems, billing concerns, or service feedback.
                </p>
                <div className="flex gap-4">
                    <a href="/company/contact" className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors">
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
};

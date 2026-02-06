
export const About = () => (
    <div className="space-y-8">
        <section>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
                At Tenbox, we are on a mission to redefine digital ownership. We believe that your data belongs to you—not to corporations, not to advertisers, and certainly not to prying eyes.
            </p>
        </section>
        <section>
            <h3 className="text-2xl font-bold text-white mb-4">The Team</h3>
            <p className="text-gray-300">
                We are a diverse team of encryption experts, UI designers, and distributed systems engineers working together to build the most secure and beautiful storage platform in the world.
            </p>
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


import { useState } from 'react';
import { AppDownloadModal } from '../../components/ui/AppDownloadModal';

export const About = () => {
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    return (
        <div className="space-y-16 lg:space-y-24">
            {/* 1. Hero / Headline */}
            <section className="text-center max-w-5xl mx-auto pt-12">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                    Storage That <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
                        Defies Gravity.
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
                    We are building the next generation of cloud storage. Beautiful, secure, and weightless.
                </p>
            </section>

            {/* 2. Who We Are */}
            <section className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Who We Are
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Architects of Digital Freedom</h2>
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                        <p>
                            Tenbox isn't just another digital locker. We are a collective of engineers, designers, and privacy advocates who believe that <strong>your data belongs to you</strong>.
                        </p>
                        <p>
                            In a world where data is mined, sold, and scanned, we provide a sanctuary. We built Tenbox on the principle of <strong>Zero-Knowledge</strong> architecture—meaning we can't see your files even if we wanted to. We are restoring privacy to the cloud, without sacrificing the seamless experience you expect.
                        </p>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
                    <div className="relative bg-slate-900/90 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
                        <blockquote className="text-2xl font-medium text-white mb-8 leading-snug">
                            "The cloud shouldn't be a compromise between convenience and privacy. We built Tenbox so you can have both."
                        </blockquote>
                        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center text-black font-bold text-xl">T</div>
                            <div>
                                <div className="font-bold text-white">The Tenbox Team</div>
                                <div className="text-sm text-gray-400">Founded 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Mission */}
            <section className="bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] p-8 md:p-20 border border-white/5 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <h2 className="text-3xl font-bold text-white mb-8 relative z-10">Our Mission</h2>
                <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light relative z-10">
                    To create a digital ecosystem that is <span className="text-sky-400 font-medium">limitless</span> by design. We empower you to capture every memory and share every idea without worrying about storage quotas or surveillance.
                </p>
            </section>

            {/* 4. What We Do */}
            <section>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">What We Do</h2>
                        <p className="text-gray-400">Redefining the standards of personal cloud storage.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Storage Without Limits",
                            desc: "We start every user with 10 GB of free space. Because your creativity shouldn't be capped by a paywall.",
                            icon: (
                                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            )
                        },
                        {
                            title: "Invisible Security",
                            desc: "Our encryption works in the background. You get banking-grade security without needing a degree in cryptography.",
                            icon: (
                                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            )
                        },
                        {
                            title: "Seamless Ecosystem",
                            desc: "A unified experience across web, mobile, and desktop. Your files flow like water between your devices.",
                            icon: (
                                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                            )
                        }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. How We Are Different */}
            <section className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="grid gap-6">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-white/10 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-sky-400 text-sm font-bold tracking-wider uppercase mb-2">The Standard</div>
                            <div className="text-2xl font-bold text-white mb-1">Data Scanned</div>
                            <div className="text-gray-500 text-sm">Used for Ads</div>
                        </div>
                        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-2xl border border-primary/20 transform hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-20">
                                <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                            </div>
                            <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">The Tenbox Way</div>
                            <div className="text-2xl font-bold text-white mb-1">Zero-Knowledge</div>
                            <div className="text-primary/80 text-sm">Encrypted & Private</div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built Different.</h2>
                    <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed">
                        <p>
                            Most cloud providers treat storage as a utility—boring, restrictive, and expensive. We treat it as an experience.
                        </p>
                        <p>
                            We’re distinct because we put <strong>Design</strong> and <strong>Generosity</strong> first. We don’t hide our best features behind a paywall, and we don’t compromise on aesthetics. Tenbox is built for those who appreciate software that feels as good as it looks.
                        </p>
                        <ul className="space-y-3 mt-4">
                            {[
                                'Zero-Knowledge Privacy by Default',
                                'Beautiful, Fluid User Interface',
                                'Generous 10 GB Free Tier for Everyone'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. Our Values */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {[
                        { title: 'Privacy First', desc: 'We engineer our systems so that we cannot see your data. Trust through code, not promises.' },
                        { title: 'Radical Simplicity', desc: 'Powerful technology shouldn’t be complicated. We obsess over every pixel.' },
                        { title: 'Community Driven', desc: 'We grow with you. Our features are built based on what our users actually need.' },
                        { title: 'Transparency', desc: 'Open roadmaps, clear policies, and honest communication. No fine print traps.' }
                    ].map((val, i) => (
                        <div key={i} className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors text-center">
                            <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Call to Action */}
            <section className="relative rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                <div className="relative z-10 p-12 md:p-24 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for Lift Off?</h2>
                    <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-light">
                        Join the thousands of users who have already upgraded their digital life.
                        Experience the cloud, elevated.
                    </p>
                    <button
                        onClick={() => setIsDownloadModalOpen(true)}
                        className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl shadow-black/20"
                    >
                        Claim Your 10 GB Free
                    </button>
                </div>
            </section>
            <AppDownloadModal isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
        </div>
    );
};

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
                        <p className="text-gray-400 mb-4">Guides on how automatic backup works, managing your 10 GB free storage, and what happens if your plan expires.</p>
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

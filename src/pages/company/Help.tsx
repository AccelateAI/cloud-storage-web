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

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Database, Shield, Zap, Globe, GitBranch, Headphones } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
    {
        icon: Database,
        title: "10 GB Free Storage",
        description: "Get 10 GB of free cloud storage, giving you room for up to 2000 photos or 1000 short videos at no cost."
    },
    {
        icon: Shield,
        title: "Ironclad Security",
        description: "Core design principles including encryption, access controls, and strict privacy policies protect your data at rest and in transit."
    },
    {
        icon: Zap,
        title: "Cross-Platform Access",
        description: "A single account works across mobile apps, web, and desktop. Auto-backup files on mobile and share large files from PC."
    },
    {
        icon: Globe,
        title: "Simple Sharing",
        description: "Quickly share files using links. Send large items to friends, family, or colleagues without email attachment limits."
    },
    {
        icon: GitBranch,
        title: "Flexible Plans",
        description: "From our generous free tier to premium options for heavy users who need long-term, large-scale storage."
    },
    {
        icon: Headphones,
        title: "Help & Support",
        description: "Dedicated Help Center for premium membership, storage, backup, and account management assistance."
    }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Card
            className="group relative border-white/10 bg-gray-900/50 hover:border-white/20 transition-colors"
            onMouseMove={handleMouseMove}
            variant="glass"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">{feature.title}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
        </Card>
    );
};

export const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                    >
                        Features that Defy Gravity
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Everything you need to manage your digital life, packed into a beautiful tenbox interface.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <FeatureCard feature={feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

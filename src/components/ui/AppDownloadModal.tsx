import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';
import QRCode from 'react-qr-code';

interface AppDownloadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AppDownloadModal = ({ isOpen, onClose }: AppDownloadModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg bg-slate-900 border border-white/10 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5 relative">
                                <h3 className="text-xl font-bold text-white">Get the Tenbox App</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                            </div>

                            <div className="p-8">
                                <div className="grid grid-cols-2 gap-8 relative mb-8">
                                    {/* Divider */}
                                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

                                    {/* Left: App Store */}
                                    <div className="flex flex-col items-center space-y-4">
                                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                            <span>App Store</span>
                                        </h4>
                                        <div className="bg-white p-3 rounded-xl shadow-lg relative cursor-pointer hover:scale-105 transition-transform group">
                                            {/* iOS Style QR */}
                                            <div className="bg-white p-2 rounded-lg">
                                                <QRCode
                                                    value="https://apps.apple.com/us/app/tenbox-secure-cloud-storage/id6758333891"
                                                    size={128}
                                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                    level="L"
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            className="w-full text-sm"
                                            size="sm"
                                            href="https://apps.apple.com/us/app/tenbox-secure-cloud-storage/id6758333891"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Download for iOS
                                        </Button>
                                    </div>

                                    {/* Right: Google Play */}
                                    <div className="flex flex-col items-center space-y-4">
                                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                            <span>Google Play</span>
                                        </h4>
                                        <div className="bg-white p-3 rounded-xl shadow-lg relative cursor-pointer hover:scale-105 transition-transform group">
                                            {/* Android Style QR */}
                                            <div className="bg-white p-2 rounded-lg">
                                                <QRCode
                                                    value="https://play.google.com/store/apps/details?id=com.tenbox.app"
                                                    size={128}
                                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                    level="L"
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            variant="secondary"
                                            className="w-full text-sm"
                                            size="sm"
                                            href="https://play.google.com/store/apps/details?id=com.tenbox.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Download for Android
                                        </Button>
                                    </div>
                                </div>

                                {/* Common Steps */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                    <h5 className="text-sm font-semibold text-white mb-2 text-center">How to Install</h5>
                                    <div className="flex justify-between items-center text-xs text-gray-400 px-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">1</div>
                                            <span>Scan QR</span>
                                        </div>
                                        <div className="h-px w-12 bg-white/10" />
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">2</div>
                                            <span>Install App</span>
                                        </div>
                                        <div className="h-px w-12 bg-white/10" />
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">3</div>
                                            <span>Login</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 p-4 text-center border-t border-white/5">
                                <p className="text-xs text-gray-500">
                                    Need help? Visit our <a href="/company/contact" className="text-primary hover:underline">Support Center</a>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

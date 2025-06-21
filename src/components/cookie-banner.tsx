'use client';

import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import Link from "next/link";

interface CookieBannerContent {
    message: string;
    accept: string;
    decline: string;
    privacyPolicy: string;
}

interface CookieBannerProps {
    content: CookieBannerContent;
    onDismiss: () => void;
}

export default function CookieBanner({ content, onDismiss }: CookieBannerProps) {
    return (
        <div className="fixed inset-x-0 bottom-0 z-[60]">
            <div className="bg-secondary text-secondary-foreground p-4 sm:p-6 shadow-lg border-t animate-slide-in-from-bottom">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <Cookie className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                        <p className="text-sm">
                            {content.message}{' '}
                            <Link href="/datenschutz" className="underline hover:text-primary transition-colors">
                                {content.privacyPolicy}
                            </Link>
                        </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                        <Button size="sm" onClick={onDismiss}>
                            {content.accept}
                        </Button>
                        <Button size="sm" variant="outline" onClick={onDismiss}>
                            {content.decline}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

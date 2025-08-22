import { ExternalLink, X } from "lucide-react";

interface IframePanelProps {
    iframeUrl: string;
    onClose: () => void;
}

export function IframePanel({ iframeUrl, onClose }: IframePanelProps) {
    return (
        <div className="relative h-screen border-l border-zinc-700 bg-white dark:bg-zinc-900 flex flex-col">
            {/* Toolbar at top */}
            <div className="flex items-center justify-between p-2 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-700">
                <a
                    href={iframeUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-zinc-700 text-white hover:bg-teal-500 transition-colors"
                    title="Open in new tab"
                >
                    <ExternalLink className="h-4 w-4" />
                    <span>Open in new tab</span>
                </a>
                <button
                    onClick={onClose}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                    title="Close split"
                >
                    <X className="h-4 w-4" />
                    <span>Close</span>
                </button>
            </div>

            {/* Iframe */}
            <iframe src={iframeUrl} className="flex-1 w-full h-full" />
        </div>
    );
}
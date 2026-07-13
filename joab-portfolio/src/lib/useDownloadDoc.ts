import { useState } from "react";
import { downloadFiles, type DownloadableDoc } from "./downloadFiles";

export function useDownloadDoc(doc: DownloadableDoc) {
    const [isDownloading, setIsDownloading] = useState(false);
    
    const handleClickDownload = () => {
        setIsDownloading(true);
        downloadFiles(doc);
        setTimeout(() => setIsDownloading(false), 1000);
    };
    return { isDownloading, handleClickDownload };
}
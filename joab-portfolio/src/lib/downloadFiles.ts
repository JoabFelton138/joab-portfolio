export type DownloadableDoc = "cv" | "pen-pic";

const Files: Record<DownloadableDoc, {path: string, filename: string}> = {
    cv: {path: "docs/cv.pdf", filename: "cv.pdf"},
    "pen-pic": {path: "docs/pen-pic.pdf", filename: "pen-pic.pdf"},
}

export const downloadFiles = (doc: DownloadableDoc) => {
    const file = Files[doc];
    const link = document.createElement("a");
    link.href = file.path;
    link.download = file.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
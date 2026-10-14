
import React, { useMemo, useState } from "react";

const BLUE = "#0B4B94";

const imageFiles = import.meta.glob(
  "../assets/news-letters/images/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const pdfFiles = import.meta.glob("../assets/news-letters/pdf/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

const sortFiles = (files) =>
  Object.entries(files).sort(([a], [b]) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );

const imageItems = sortFiles(imageFiles).map(([path, url], index) => ({
  id: `image-${index + 1}`,
  title: `Newsletter ${String(index + 1).padStart(2, "0")}`,
  fileName: path.split("/").pop(),
  url,
}));

const pdfItems = sortFiles(pdfFiles).map(([path, url], index) => ({
  id: `pdf-${index + 1}`,
  title: `Newsletter PDF ${String(index + 1).padStart(2, "0")}`,
  fileName: path.split("/").pop(),
  url,
}));

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 16h8M8 19h5" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, count }) {
  return (
    <div className="mb-6 flex flex-col gap-3 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p
          className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: BLUE }}
        >
          {eyebrow}
        </p>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h2>
      </div>

      <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
        {count} {count === 1 ? "item" : "items"}
      </span>
    </div>
  );
}

export default function Newsletters() {
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const filterItems = (items) => {
    const query = search.trim().toLowerCase();

    if (!query) return items;

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.fileName.toLowerCase().includes(query)
    );
  };

  const filteredImages = useMemo(
    () => filterItems(imageItems),
    [search]
  );

  const filteredPdfs = useMemo(
    () => filterItems(pdfItems),
    [search]
  );

  const totalResults = filteredImages.length + filteredPdfs.length;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Bhoruka Header */}
      <section
        className="border-b border-blue-950 px-5 py-9 text-white sm:py-11"
        style={{
          background:
            "linear-gradient(115deg, #082F63 0%, #0B4B94 65%, #1764AC 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-xs">
            Bhoruka Power Corporation Limited
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Newsletters
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
            Explore our publications, community initiatives, and stories
            from Bhoruka.
          </p>

          <div className="mt-5 h-[3px] w-12 bg-sky-300" />
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        {/* Search */}
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Publication Archive
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {totalResults} publications available
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search newsletters..."
              aria-label="Search newsletters"
              className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <section aria-labelledby="newsletter-gallery-heading">
          <SectionHeading
            eyebrow="Photo Publications"
            title="Newsletter Gallery"
            count={filteredImages.length}
          />

          {filteredImages.length > 0 ? (
            <div
              id="newsletter-gallery-heading"
              className="mx-auto grid grid-cols-2 items-start gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-8"
            >
              {filteredImages.map((item) => (
                <article
                  key={item.id}
                  className="group min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    aria-label={`Enlarge ${item.title}`}
                    className="relative block aspect-[3/4] w-full overflow-hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />

                    <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white/95 text-blue-800 shadow-sm transition group-hover:bg-blue-800 group-hover:text-white">
                      <SearchIcon />
                    </span>
                  </button>

                  <div className="border-t border-slate-100 px-3 py-3">
                    <h3 className="truncate text-xs font-bold text-slate-800 sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-1 truncate text-[10px] text-slate-500 sm:text-xs">
                      {item.fileName}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedImage(item)}
                      className="mt-2 text-[10px] font-bold uppercase tracking-wide text-blue-800 transition hover:text-blue-950 sm:text-xs"
                    >
                      View Image →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="border border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
              No matching newsletter images found.
            </p>
          )}
        </section>

        {/* PDF Publications */}
        <section className="mt-12 border-t border-slate-200 pt-9 sm:mt-14">
          <SectionHeading
            eyebrow="Documents & Downloads"
            title="Newsletter PDFs"
            count={filteredPdfs.length}
          />

          {filteredPdfs.length > 0 ? (
            <div className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:gap-5">
              {filteredPdfs.map((item) => (
                <article
                  key={item.id}
                  className="flex min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-2.5 transition duration-300 hover:border-blue-300 hover:shadow-md sm:p-4"
                >
                  <div className="flex h-16 items-center justify-center rounded-md bg-blue-50 text-blue-800 sm:h-20">
                    <PdfIcon />
                  </div>

                  <div className="mt-3 min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-blue-800 sm:text-[10px]">
                      PDF Document
                    </p>

                    <h3 className="mt-1 truncate text-xs font-bold text-slate-900 sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-1 truncate text-[10px] text-slate-500 sm:text-xs">
                      {item.fileName}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.fileName} in a new tab`}
                    className="mt-3 flex items-center justify-center gap-1 rounded-md px-2 py-2 text-[10px] font-bold uppercase tracking-wide text-white transition hover:opacity-90 sm:text-xs"
                    style={{ backgroundColor: BLUE }}
                  >
                    Open PDF ↗
                  </a>

                  <a
                    href={item.url}
                    download={item.fileName}
                    className="mt-2 text-center text-[10px] font-semibold text-slate-500 transition hover:text-blue-800 sm:text-xs"
                  >
                    Download ↓
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="border border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
              No matching newsletter PDFs found.
            </p>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-200 pt-5">
          <p className="text-center text-xs text-slate-500">
            Bhoruka Power Corporation Limited · Newsletter Archive
          </p>
        </footer>
      </div>

      {/* Full-Size Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${selectedImage.title}`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="flex max-h-full w-full max-w-5xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <div className="min-w-0">
                <h2 className="text-base font-semibold">
                  {selectedImage.title}
                </h2>
                <p className="mt-1 truncate text-xs text-slate-300">
                  {selectedImage.fileName}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-3xl transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
              >
                &times;
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[82vh] max-w-full rounded-md object-contain"
              />
            </div>

            <p className="mt-3 text-center text-xs text-slate-300">
              Click outside the image to close the preview.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

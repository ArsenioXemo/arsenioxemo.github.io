# Editorial asset ingestion

Approved WebP assets can be transferred from the private Drive archive to GitHub as a JSON envelope under `src/editorial-assets/`. Astro emits the original bytes at `/images/blog/<filename>` during static build. The envelope is not served by the website. No new dependency, credential or write-enabled workflow is required. The repository is public: only approved public assets may be ingested.

Validation: unique safe filename, canonical base64, maximum 150000 bytes, RIFF/WebP signature and length, Git blob SHA integrity. Existing public images are unchanged. Base64 increases source storage by approximately one third. Never reuse a filename already present under `public/images/blog/`. Review via PR and verify the emitted image before publication. ART-004 article approval and RSS pilot remain separate gates.

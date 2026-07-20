export default function BrandLogo({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="VeltriumFX"
    >
      <span className="inline-flex items-center justify-center overflow-visible rounded-md border border-[#D3D3D3] bg-white px-3 py-1.5 shadow-[0_10px_24px_rgba(0,103,79,0.08)]">
        <img
          src="/veltriumfx-logo-transparent.png"
          alt="VeltriumFX logo"
          className="h-12 w-auto max-w-[210px] object-contain sm:h-14 sm:max-w-[245px]"
          loading="eager"
        />
      </span>
    </span>
  );
}

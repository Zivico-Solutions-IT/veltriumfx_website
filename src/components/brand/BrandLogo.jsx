export default function BrandLogo({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="VeltriumFX"
    >
      <span className="inline-flex items-center justify-center overflow-visible rounded-md  px-3 py-1.5 ">
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

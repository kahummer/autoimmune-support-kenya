export default function Ribbon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M20 2c-6 5-9 10-9 15 0 5 3 9 9 12 6-3 9-7 9-12 0-5-3-10-9-15Z"
        fill="#4B2470"
      />
      <path
        d="M13.5 24.5 5 44l8-3.5 3.5-11.5c-1.2-1.3-2.2-2.8-3-4.5Z"
        fill="#6b3f9e"
      />
      <path
        d="M26.5 24.5 35 44l-8-3.5-3.5-11.5c1.2-1.3 2.2-2.8 3-4.5Z"
        fill="#4B2470"
      />
    </svg>
  );
}

export function RibbonDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span className="h-px w-16 sm:w-28 bg-violet-deep/20" />
      <Ribbon className="h-6 w-6 opacity-80" />
      <span className="h-px w-16 sm:w-28 bg-violet-deep/20" />
    </div>
  );
}

import Image from "next/image";

export function AppStoreCtaButton() {
  return (
    <a 
      href="https://apps.apple.com/de/app/radauapp/id6745492017?l=en-GB" 
      className="inline-block hover:opacity-90 transition-opacity" 
      title="Download on the App Store"
    >
      <Image
        src="/AppStoreButton.svg"
        alt="Download on the App Store"
        width={160}
        height={53}
        priority
        className="h-auto w-40"
      />
    </a>
  );
}

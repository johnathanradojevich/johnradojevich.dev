import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen">
        <svg
          width="40"
          height="40"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed top-4 left-4"
        >
          <g clipPath="url(#clip0_12_145)">
            <path
              d="M74.123 74.9852H66.4424L35.5154 44.0583V34.7744H57.1585L30.0791 7.69518V0L70.29 40.2107H39.3485L74.123 74.9852Z"
              fill="black"
            />
            <path
              d="M35.5152 20.8122V74.9852L0.740723 40.2108H8.42146L30.0789 61.8537V15.3906L35.5152 20.8122Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_12_145">
              <rect width="75" height="75" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="40"
          height="40"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed top-4 right-4"
        >
          <g id="Layer_6" data-name="Layer 6">
            <path d="m29 17h-26a1 1 0 0 1 0-2h26a1 1 0 0 1 0 2zm1 6a1 1 0 0 0 -1-1h-26a1 1 0 0 0 0 2h26a1 1 0 0 0 1-1zm0-14a1 1 0 0 0 -1-1h-26a1 1 0 0 0 0 2h26a1 1 0 0 0 1-1z" />
          </g>
        </svg>
        {children}
      </body>
    </html>
  );
}

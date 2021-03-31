/** @jsxImportSource @emotion/core */

/**
 * using max-width as 800 as i can see it on the browser
 */
export function MaxWidthContainer({ children }) {
  return (
    <div
      css={{
        maxWidth: 800,
        padding: "0 16px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

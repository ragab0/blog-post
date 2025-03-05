export default function Footer() {
  return (
    <footer className="border-t py-8">
      <p className="container mx-auto px-4 text-center text-sm font-bold">
        Made with{" "}
        <span className="text-red-500" role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://ragab.vercel.app/"
          className=" font-extrabold underline underline-offset-2"
          target="_blank"
        >
          Ragab
        </a>
      </p>
    </footer>
  );
}
